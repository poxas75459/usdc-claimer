/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "5hRFb1SuSpTRBCkqG17jN7iqp42pyZuuYZV5KRrEFByurySmy8R2U2westCaMcXaT2JCyS4Ga6uwhaswKntxSsFM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kseduDPYMXUom11Lxprz79nNacygvGGu12RD6YKiS7oWBnG6hfCiFCGPpfKrc9rD2CdCzEN2kCFXiMBUtfYZptx",
  "key1": "3a7eM7nxXxnHYTWj5sqWuMAEs1xcMEM4THcAfUmPzFcvnNeMqw7N5wdMV1cSWMpSV9T2rqBmnHsTMoxSRqcaNJJD",
  "key2": "1bhLSrYuMAnFUkqk7HSQeUxrjWg5gD83x3ySGNVeS8rsTmipby3WYCteTnHPRMjHFkHskHQF4XUQ7MDrccZAY8Z",
  "key3": "4Lava7BxwzEE6uJpC5kgHQpxF7ZEqZyAwVJ75gTz1QBapU1w4qQ3YN8wvXtdeLQprPgJjWP4ZfJoQgadWi1XSpsL",
  "key4": "3NuXP83MBMMdVxHYqJ7vefY8zKaoKcDWGa9AJxbnCpxDgWPF9bpHiUbaZvTGvk7x5d56EToCyoF1ghf9G6KP82ZA",
  "key5": "WvVEuEKXXFFapP8v2j2Hvmr5UVGNHBHREZQHnjFTWtbwtyJYfsiVwSGqYzKxP3cW2Ns2X25QT15XE7auwMi1dwD",
  "key6": "2PuLHgFw1PwhbBKE8xARQ8zW35PZtbukkmEj2bHkv74kn17hhGSPukSHBdxg9vTpvzJtAd3Cyd2ZKrXkWhSo6eMf",
  "key7": "5Phzb3Kdp7XnDusF38Wi6gbvNSaAanvb2E5WJaMy3RM1TBRNWLmrkkMRNiZLxA6tH2UHvbDCAo5iWABLyFvqcfrG",
  "key8": "3PCuca9vQtmsGYaSLxsEtFzrBaVPwrGaeH66zevAvRce3G1TeDC15WZxAkoNqM3bjA5r2X9qyrzMTZ5XJzREXQQY",
  "key9": "6535s9NHy64JneCeExoJtdrTXReuuxuQsnLH5HAEF1mbbEqLHxEUGF3UAeM6tZYrM9MHeisJF74SsGLiR9PzecEu",
  "key10": "4jtDVeG8KtMzqzhv4Zmt3WFH4NBNgmMeKNSQD5QLdrY5pnyMwyhppPaWDWK6qrJ6y6eZqNPq8YHFWFeE2v3cjNP2",
  "key11": "3xT94X9qRL6AUMq6tHQ1KztHp16QdLoXf9Y4UY85oUpagJqfbN28Msqk4TcfWam2X4FWx6Dk7HNYk7KwnitYQUMu",
  "key12": "2Mk7T4f1tBE4rnBEhA2CKKhVZp3uys5b8WXV72jvGipzkxeAj1eVaE4d9FGr2yxuYe5mxXFgrLaentyqGt5Qm6Kh",
  "key13": "4eL3h6E7F48zRGRND5msg2x2GkgrA8t65oPyGBfRy9n9NTNJoc4c9P78EpUNRgD3zbZ5DbRBzvaKgAWEwVArYgpa",
  "key14": "2qzohc4zFSQvzjKUzNvvt6QDgRyYM1wR42e64JXyMT97jsTMKw3onHJ6VLWroBE75rfxHAKL7jDXSXsaLSnxsy57",
  "key15": "2vT7UPZ3d4NaqDCFKHExyQyReNtUwdV9qYBYEv4QzjquRK8RNxUhyqESUHnDZtR7jhVAppFQtz11DQ9f3eXDhDen",
  "key16": "2KfFySj3h56TZFNLrKF8AXAXEm9RQ3oBPTVt3PiCYKFmqVroJzJcHqjNPAK4QxJJCCZ1A1KgvUPzde4JPoYWpJSh",
  "key17": "4zFc7CGUzaDmAoZzNsrnw7KwaPyXJUdUpwYcmEDDSswaPTPtYjX7C3iJGZqd2u7tXGdJ3eaupafGYdutuiWM8KqQ",
  "key18": "3jjHFXJqvNGhGPs7K1gUUuzmvvMJN9zszSF2uZBo3uMXJ9ATs56HiBpeDhWMjwvcaotaeEgBwgYeFacKKReeb1vb",
  "key19": "5T8TbAsw7XtiJoPbK4vAU5MgqXhyT95w1tmtqibtahS5JQ1P5r1nSGiotB54p6TYdKYqGCEhQ2degSVtUD3AxwWy",
  "key20": "4EGq7mVzRFQbANybLdHPCFSN2QmYZySV98mARBvf9soZuRrumNxh2LLxaMjUgqS6DybPEzanYVQrF2BMMtkX9wKh",
  "key21": "q23AFKrEqphh9bdMSXLR3Q5UPBNuKPyM2r9BFobQ8RLvKtai36V5Tw8YfG18sQa2kP9tDQ7KFkLeJ2emQkgTdmf",
  "key22": "GodvUJLd5BcVU7AJA4DqZjHpB2J93g1PXA5GacHerbgnUybyRR912jc7fK82QzwtKs9rUqEML5SDuDh2cHc4eS5",
  "key23": "2dQh9qcZuYNdDRrB9nezSWLAho6nBQdiyUKGsK9ksuB4psUxC3XtfRYqnwL7DGssgULCY6bcWcoY24WUmiysCutZ",
  "key24": "AfHAGhFmpc6avvUFCYPRvnUvt4URmdW8bEVMRwyKbuRiNUCjJjeFx7m4Di2jA3fEmbjrdhE53rM9LhHgTp3AZt6",
  "key25": "3unGAh5cvZ4qbZhT2BMUbiuaVcrtSPTMWWzsqZScHQMLpXyEspnX9cDhbAX5CTMPwwkDxdFnDVwnMh4MdD9BdvMu",
  "key26": "57rqnT3eCc8C7BLMiLhMHcbD3XjbUYGmCwZXMAVwRXWDW48PCwxsXd8TRLL2fMmkDTLnvx7RSBA5iZq5odnGyAGN",
  "key27": "4WT1bvfiy6tu6pWVX3Qr5vgrSGW3QkkXbA7NC9DLi8vW1huZFPytbpU1Ki4jDVZRRpu4GdWRS8aTVZsPWLpMyDB2",
  "key28": "2sfJ7zA3Rao2dZeZmr28CBBUesFayfyx3ZrZ2bhdDXKGxmUWKzSKGwYvaWfZzJZWbTKYJtQunYbjhTJRcZt4Htts"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
