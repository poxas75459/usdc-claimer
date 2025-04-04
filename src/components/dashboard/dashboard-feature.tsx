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
    "5xqAmv8JddGa65KFFycvAyd1k42t96mmcy9Mzvurg6XBxcuQHvp7Ncv8d1hbCeCmfh6EiLXBLLsDmg8D1LkccRSW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uNzrffu7Z2UWE3kymkwbpTwvhCd6hafpn13p3QXmxTdZgRoZZDsQ6AAwFawPbKn2Ksm5uo5oB4CpmJc9JCypqp3",
  "key1": "fK3B3JuHUrgRV9JX5ftFJKxdr9nPcFd6Kx8HEodRTYFtC6Y8CFHRc1CUnibmCgBpnxipR2ugSmXTQVrjzKfhkRM",
  "key2": "4vDY4wFbfuEqWc5movUggyXPUauzyFLk4v8ui9JcLBCWoVyVx1yKf2dZgdeNKD2YZzYToSBnP2mAHe65WMsgrnEy",
  "key3": "LoXcsgUpaRFpsxz6MToGFmgVMbeHDwdUF3vSN9iVY3JUpQryec5hSMdpjDDZeZwYheZZWSMQ3ZYuUS3YNCpJoau",
  "key4": "59zPtY6mMAjiQShssqQe94Sm4asNz7ZgJC1HLxk9ru2ebXZbnBRzJgJDbrCPMQ9EpjqjgDzA7NeQxBviKe4aoWVC",
  "key5": "5Lsk3HhXz3cWgAvG9BXHV3irzGaxU1CDsLaYMpcio9Foitm1d1AY1FZmJYkqfEy65ZqewpqQLA25USGELEyFoRvz",
  "key6": "4yGKf3Ks5RJQ2LAyNKsgSU4HpEnKDyXTWyiwF73V5Qd94sn4WUwdFUBSVUTQDLQ15WXFaAC2qhfesPqMeuWH4Ub",
  "key7": "3tmL581MrL9LGBWfQeW35KrcrFuJ9L2FNfEyoS7RKnrS6cyAbGwEFxKkdDNdJqBT4SvUX58S7t8fTHoUftwiUto9",
  "key8": "5ieziQaQoGgjwncbbHkHYxf1WZTuGqTWUpTBtaLt3Ko4U5yyRsJ7ByJ99wvxKqCzLndaSw9DkEABCRvfHEcNVau7",
  "key9": "4g46pNawezmsKZY5izQoUi9DwtUVfd3LMopgwYFwNax2XVCTLM1Xdq1aKr8d8c5VKPGJ2nxPDsMHHTfNaDgBgiwv",
  "key10": "5eD5c7Kucm9D3NohrSnmDcGDmLXKeSZkfoKKfU9vCPP4Y7jMuLKwSdyHKoumeDgsHAX5PGzVRJ2HN3L6o9ggkbjF",
  "key11": "49Xbmtxs7uFmFB6rJgGkftcmeZQNRMiV2vgKvF4ko12L8sPm28U2CuvdDVr8jFpnGDYFQby4n4JQ5LL7hEZRBkE5",
  "key12": "4jgLLhoAC2Y3o2YdDnWBwizjM8Lv2NNmAE5DFK5fTJwy8ZMoyiU3GvzW5gawwZvAoTkV1LbY98Yz3mN89yYB9HyM",
  "key13": "HM5cBF6upmVjGV8xeAKS6enPCMf3Amuxk9fYS39gTN1ezLeVPHQjGYFhRm8VqSjkUzWX3HxXdoUHF1qvvJBNmUv",
  "key14": "2eYMm9CQ2WhRj7gDABc4A2ZnUh23EbhSHmCWscryuvLDvtxME58tWUhebjosWJ6GUDUVe4PsXy49ivmxRb1qocL1",
  "key15": "2KjbFeExeV1B1M7x14za2aQtq9RoG5ygk8jWseP2YezVCZx7LRYsd9fCq2Lv4viV1fLvJa6ee4MNY6J78dNbcUAU",
  "key16": "2a5TfpCqJPfFckdPJ6UxckrVRL2pUTKeTta1U7wzduB6VPoviVQzRVUQg2jxCCCfHfBM4Sx9JgdNwdmMY7tbeRpQ",
  "key17": "4oSeqxZhGwsgKeWrJuQdZavBxGDgA1esNf5g7uvv6967ExCJk21D6xby94wEbWRnKzdKdc6D2oPJf5SYaLxmjPZs",
  "key18": "2wmaXFJZSUpuYRMvdCxhC2rQp8xwmZQwS3G6zNFVdEuXT4RJEmJ8ZguS2MAQP7u5YVoNwvasQaJRP2JT8pX7B5HJ",
  "key19": "42g4W1ykCrWWB8X18utT9uG6K1fPaHuwgnLXLwaSG1Zhn1t5Mbor7P4JBAQLiMJxpckyKjcdCXjgtrnY5AMGj4sS",
  "key20": "4hDzwwfJnwMUtinRD4XXJ6o3x3sDGyNVd4UVQmWVm9hVvft9RMUnR4oide9Mnpp4wZsY6scd7UkcmxVgfUJBAkw1",
  "key21": "Uj5knew1mshsGNRH6VtdMVgkHbz7DmTZspnvgwDm7XZdxnkT7MsXNSGreDYvFuDB8uGo1pVhVo3yJHDiC5Arys5",
  "key22": "4eLtLmEHtuMMck5awrqBAbaQb2zwxxT2E1dtMLGGoYKZ1JcJeKCkL9GMUY2DgiZkxKmvfgZNnF4T12CVvYb5peyH",
  "key23": "2HhYALykqoYCm1JReDmfeGowhSfugW13qbzZoW2n8VvSowpaUxSepY7fnwHW4fsSaKhZvSNAunQsfV2PB7F8uYFA",
  "key24": "4RP4W1mQRJwdTS6sZGzFQDWAYdxgn1JoYMuYWQkEBLLoB9bH4N2g186x4zFtXXp6HRf8Zse9ZiZCieVGmiTYvzXc",
  "key25": "2QJPZYF5ns83VFzfeLXbaCTtD3JXMN5dFhebgphdcZHXmhm4QDt9qrpZoHTLfYrLEMyW9VgRDrEmTiAnen8dezUC",
  "key26": "2WpyRrZmd9oQAxHLdyrjVzxadVxeFNAPacmwRPXwnXNgJAY6TygU3nwmpgVZLKGSU2n8ad9v2u1qbZr9dvkWPh2j",
  "key27": "5MSztett6kTQRK94BL2iT3BswJPmNXNQkpZ1WQFXawbq5H67d4nVxXLrcsnNdGfkGYTzxFysMo8sdVbkTh5Xm38N"
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
