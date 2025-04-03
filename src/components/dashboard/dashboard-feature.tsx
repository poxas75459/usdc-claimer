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
    "3LeHE9EGAQFreF3i59w5Rupx5hYveXox4AstZQfkWoShwTuaYMiVxaj87iDxZByHMcG8tfW2e2VW5aGZkVEBXjXo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t9XcN2AQJbfRMXZzenz3noTeNVykQgAskAwCDyy9amLGA6Bt9SqgJyFTdJfLAmCTNfoAzRERVni622xvMxdTMRA",
  "key1": "4RGwtdCFKTDgVNCxNo48qgKmkRKfgZmiNZxxgfgWMY5pc6qs1SiFewdGJf15vPyxkZ5iSvZrHQ35Ged72QH7UpSm",
  "key2": "3ffSfVKnJHLqLn7F5q3SN3Ax9gWBfQ8KtKRnUEpGzEqEbDUj9umwdT2msXWceEeP58XPf2kpfpweXsHHEAqvvhMK",
  "key3": "5t6aA2iXSa5EP37j7xi2f59TxbffEtK6vM1nAJJSRFYDm7dTr9iuCpG8w5QvZs58pccae71dUAhVvQoEphx2seFQ",
  "key4": "54zNArx7SrQvHYC7TeAVrykiH3JjFaA9SNTobGaH2PGUxrC4ov83TVA7CJ9Fp4bysNvYVvMLuJVajWUM2WkY8SyT",
  "key5": "1Tj9KxUTqwJ2X5cGAXAhUrX5XUZSKa1cbcHYrVsiRh5wKPHNzef7V1qnb3YwqLPjFHvfeYxLcSxVkgdi2cWo8pQ",
  "key6": "3jFy9wfwFk3BnpXFeFZPcd85TjvVd6M3CkLQii5xffifV2weg4p5aHKwpUd9xioLHEBZxA94imJb9fu1L2PhZLnN",
  "key7": "o8dcCpC9EBrFMR7Yr683rWQeVGgfofK5WmQhQBBxFggpxdhM8uzfq9ExuDk3rN6ds6EMJHMqYAEym3ZLZx7umfJ",
  "key8": "21LdVsw8MKvdCNuiaR3pLL6Wn8tc9pNZbw5gmf6ch1vsR3j2m4DBEFJCZBJRKW63kTspis5BpDWwpjvHwZjPKPUy",
  "key9": "58mmc6zNsag5FRnPjJ3xsAcpXunuDrXpgGPLxvk8TZHK8WB35wuPc6B7kyxfFN3g6b2mnBJRJMWGMyzZ3KF6T7gC",
  "key10": "2XJkCAAVnVWbERTsCPuNi1JXC2RLLE1gMTckSiLLWUn7WirBVDyHdcPn83xZ7Yfaa7KwucVRK1YYHBMWcnsrGDQk",
  "key11": "4nRFQpYYKmoPDb3dHQJqBYTYeiBw5saVkfHfjhNgFh5Yd7UB1yKsT2QkMNXk2CBcfzX1QFDKpRBKNEpmJ4XbaKL2",
  "key12": "3mqFbqJMc8sZG2FFYHJUG73bT9GrN93deXKEMWuwUoyuatGMBtmuLhR2ArkE49TKVU7DknNxgBw8R8q95wqiXUfF",
  "key13": "UyWc5jk6kE912qoUHo4kjFbAwjRJ4aevij46GmjtNc52aHcdJYNFHohp9zYXxpiVrKGnE6SWuBYXh9aauXkXFGY",
  "key14": "5XPrNPETM1vXR8CoLYuW72M7LHrQu5rQHmSKwBstqmmkTNkwbTx7MRxzE4QeKU2UCTxxXWsFfUypX2iX5Leq4xAt",
  "key15": "5s69Z5W6KENSSSafWtF8b5UVwJKprX4paCp9guFvFWL3wQCa2kenLJ9P3opu2azga8VQZ2tHbdX86m4kUZAYJH7g",
  "key16": "5FhvFRcUk355UP5YMDEk6W31HisPYFgp4fqwv7Y2SxYZuiHvByo1W4hacmYz4VXWXynFYWemRdCQS7hyLu3bDDug",
  "key17": "3T7NPaLSdaYcNDYM5ckGffyRcv9fxyEWpr2wavLrGmSQZxqtvEPoQCwo8ZijJzMyb5X3tEhV5777u7dECWZXJeGt",
  "key18": "3BkULDHz7sQnJc2Zuinsav9UeHLHvKstUGMhGNnytPNGq6FCkGaqtrijGUVW6s4mZgTps2NUQa45Fs3pJqTeSE6w",
  "key19": "51w5oCTM32MJQH4pi5CBFE6Sv1HLmtfb19YBTCVKj7aRjayVFDpaViSJ8ChjEebt8mmJrEMcrsgeYFbY8CythjYo",
  "key20": "65TcMJJGFMKAVhmTxZjwyfR6ZdC3G64YAM9JjHCeQVc3yXYc79zTXd6TjUkMAez4xJJmmUKqofsEEgDsBQcKwpTH",
  "key21": "Ue1RT76XPHKCSHySJB4eXfmPLc7TMRVjedCzBmdtXZLFQosJNUfTZ815bDWKLPJwHVPGTUUHPEf6jha9mwiDkJE",
  "key22": "4pHnkX9m6ooNv823VMnY7vYZX46aGcmHvCEM8ePd44NScxPchMcJQw73K6MqWmyxRcf88jPT4XZkjiJ99kmZirSV",
  "key23": "4wWDEnaokYAfsj39V5SFHP8SrNeE2caEsjZoT67rY5a7AL5GwBRxbUfEX6wAtHkN6EMZr7k3YJTVxoZKwuFhVK5R",
  "key24": "319Nx1m65Ny4X9Z4eLgJht7x86MgJUPBnUhpsfj9ZfBuhNeCqJ5EnQXMCWnaAB6ukY9GCDxWe98jKnGg6qcY6vZm",
  "key25": "5bxVHagyfjpNHLtfoLBSWLhZLRVWDUeHLTV7jnLkNTJ8zdSnqYya15eUvNQASqvaP5ZKfZz13RfxEYeGzwiZ3bSL",
  "key26": "5myuFKRrw9dg8AU948UE9coSP79Zq6v9Qh381oWaq5Lyy2c3tBBMz97grHXmjecTqv1aGtkp4EFP25esHapmV291"
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
