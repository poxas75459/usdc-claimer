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
    "3ZQ17w7ZVjxQUBeNWaWzCGZehUFE7jpX4frsCyqJSY2fVjhDJsMZ8Jr1G6jvee2yKSgCrYsQiCCS5tbc8yUQYu91"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64S16qupUrcqjbvxyndeyZqJ7tBc9A4gK4KYkgDD2v54XiJTpdmqPaYyLnYzvBtvT38K3y1tQzZBcxHJk9isfAbJ",
  "key1": "659TeCeA2rNc2k9epuCepRdPWxo1n6Z2aCyyPGErcegSTGrykGiAN7NJivMS8izPwfADSSPBV8W7awGjj2iT63jH",
  "key2": "2vYwtfxbfEbzvG21MYbFiraFFvussjny5NEbqAJg8xwzu2nH6iPW7KK1ighnUK3ZWF9iEv8tZd7nvjcmpvY6ioKj",
  "key3": "4hZCjdun6eUmKJc4jWXnsxxCwjpNfB8Hjq5SVmLsXQjW2YDc2kqVQ6eb2uRx58GB2AZnebKUD1KbpGqwd6rrmc9q",
  "key4": "3XatUQBisFjaWRiCqFyfpJKma5DnzUmB64PPhra6x14A6qhy2MppMSDdfxcXEX7vvmBvNKm6Tyn8jUd31SVvFFsL",
  "key5": "3ExK8G7nxNwgSKtWiha4K7kGZMmx23ytWwKMnkkywkfVDFYDVnrgcRNXFdLTTv7x8eFcPX7TqLUTxZgVTsey6acZ",
  "key6": "46i8C7dzd2ythEWpDWGUubC7ryaSvqJFFgZZ8n2Yxt6VSeNbdaEbQx1QAGhrWPbMcFGW9KMC3VshVFqJKzZqRop3",
  "key7": "4yybfN3yRJLdCXeLFyKinUUFnE6q9HwxoVczRfwA4jr7VFHmtu9e8wN1YuMJj8VS2WUoVrKGG5s4AZVeQKz2aEzm",
  "key8": "5xPkYRBiMDyDEw9Ah1xGrbz69J5Qkccj2aUTWCi14GtimQKNyvUwoZYsaoQJwyogCnrmi13for36JJT42J76g5yh",
  "key9": "3vkPwzg2LT9prnw7SC7SLzJH1zhY9wBAQNW9PfPokkK1W5ZBk8nM4GZzkgWpgRpiB3JrdNopXbifNeaqFbiAs6C8",
  "key10": "5b55DSXf1F7776bgEQZV4tR9SgniHtZ7wMd7UdBvdU2kZUbDfR6KAAzpg2VZnosPyiaUtaRRHnUWEGB13ezTx9E1",
  "key11": "5FLK6rN8u22QHhk7kH2L7bfFArTE3H2EcGUTPw1xE2T7j7JSxBmuy3GE659pQ7MDKRwMpWMGTm57AP3uZjZWBvtE",
  "key12": "3kTkuD87qEuSAzFCbyawxwVFTNkHFoHDUx8DgfXh9WYjGyb9BtCGodLSVVMjkcSYD4qQpRnRVK2bp3HLGV62FQLX",
  "key13": "3Z4sPyBZMmVVeFD1zenwebiAQ3y8Wq5HVq9D3SzCutGZQ8EFnQgtKzojnSWEHxyMKMPdbNDa7Kz42STLgQpSmt5z",
  "key14": "b9iBuMyw5VQZEzk6f5MtiAZM2cowSYYp4PAGQk1dKZge1gFGMvrGaHEN9XZHZSPJuHMqXdF9Q4gZrRKchNCDBM7",
  "key15": "3VJMUh6Ac4FdSK4K5JX1sCYDaH8WwNmf6fLSPP7uzxmavkpB277r1UWdL2LqucmtHQ7Gs3YHsYbcA6gE2PaSNamf",
  "key16": "2dZuxrtZAtkkZnB7aSsENgfsUVn2oAjT8ud9C2NFMoU3C3Eg7WYcnv1UzM8GyUU5uB8mYWTvn6NwubjCv2r9SaTg",
  "key17": "3sEnCEXTsPgU13zwwg3bu6nG9hwvBCG7cistpTh2o7WQDpii4uMogGQGmVAFf5bX5YZ46ZZWnFq4sc3dzF2DuM7U",
  "key18": "uh1C2faJY1ABFYHVXGqFaRAiwYaVdfd3ZTQ84wCFGSmBUycX3S9g1HQ27uemoELZLkuKjJwLkY6a7WW4mokgGPP",
  "key19": "3JTGoyX71wZdXGN7bvsGT9Bp6E6DkRq9vJZXX9pHaPZ61YozUa4uQfqAuCj71wXqnreHYVJWExEPuC2u8VqcJduw",
  "key20": "4C4cU5r4rADkCNBQJM5RJo8SXYfsxJ7zX7RJ9zaDh5uBS5YqyZoYJbM2fo1UWWKU9kCaFXWPHpVDP2o5RfEHdW6g",
  "key21": "5wybTogwPNvUteNjwdEGET5uz8WprmtKYL9LAjoMAJebDy31aSfavCBtVR3jTanXq1cBbDwZmYqdZrsupfjayYAE",
  "key22": "23Nw5wkHzsPpGD3ZMHLab6pQpDoN7FsHCrYw59vrJFjpc8BhZMoAXu5UHXDPbsffQHKZwqBJQiAp4kuRfTATbgC4",
  "key23": "3QEJQWkGXQ2iLKc1Xe3gFofhLEYaLjfT6sbVpUewDXCtBVJbwwfeSwo8WSH7VLJFfaLkS3mUwE255Ps732DHne5i",
  "key24": "5jar41yVJhmp5a3Xs5REenWUpY3F137TuEGppMumCvqJA2jLcHoqJDArcxa69H5rqvnCCsAV6XEnpYHxfuKStnpj"
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
