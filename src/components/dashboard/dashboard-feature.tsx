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
    "5Sn6MpbP5X3gHXPrYF6JxbTnjeDwHEi9gm6ZR3n46vusACrJb49eZqjgoApGptzQheCc2BAMxm5S4UZLcW2GLXdY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zioVWNRuQxw8JtZKhRTAxmM2e26CGhG6CqrjBtstjHtLxjk3MuyGV9oHJ1P9kAerBjz5W1sHxD87p5LLhjCoiNj",
  "key1": "2FdpUd9wem1fAfdPGeauY8yikhgbL3WECSFoWPKcX2LPM1iZsbiUevyQUDaTy3ytTu7R7VTVzaUBEn7cFWM8y6jt",
  "key2": "2L6ZMotEkbUAKbCBFEza7CEAyzPxXfQnaSHJ8axjePqgYd47uPMpX1Azv6ybBVRwBbuLJ6H6hXYtbQ9XbgSGQokC",
  "key3": "4wosnh3XHTnXZZJVHejyNkxaWt778uiZMwWZgVhaC54tsgBQ6ZjZ46Sd65kcAo1dLtcCPePh7nDSRUjSE7W5cVWB",
  "key4": "2TSU1rn4SGybcQ3eqPYpURWqaSTMw7XGUv8gLaJAhw63vxw4WgwshaoKYTfVtdK3vjnVriNWf9WuUZcEUjmkcJza",
  "key5": "2jWUxKuS1R9nSpTLDSmn1t1xRGk1XGdiQweQ6KTDFYrFazZ6muWC9yEbJrL5KqhVrhuustiAr5sjMSU9r9sVtGqy",
  "key6": "5bHHPvTFL2wqa73kCUjoMNJUd1YTjrqCs7KVkDk16TT2a7dVwEh2Z6BWPWtsSgahCJzU6HgSKudJLKPY5RG8XXEd",
  "key7": "4HWymh9JfKXXHT7WamieWBSvzNB88zXmLJ6KHrt9iYLX8tJLu6r2PQuSSyMhDQU7BTuJTx1QfT6pMenLTUecaH7g",
  "key8": "EWKGqER2ftcp6bAEnw2Qt4Ugx7XipJzWa9hjixRyMecGSCzuHYGDeQ4qRHWSvwsbAhLtS7Y5E4Wnb8SoS2S3LCc",
  "key9": "3DosVq6bf8vaEpDwQJuW2FGFfwhPUoY1vpvLGrGoAU9j3SjC5AW8p4nkWv4czcW9YPXbo9h3TXz8rNF4i87VJnyb",
  "key10": "L2MwcZAbWc5dLHowmF6u4eeK6RM3tmb7eZLv388DVadh4671jm18qk6pATcMvdk5HhmryXAb1tRXMZJX3vfYZdE",
  "key11": "5jYNV7GtnW5TE3tbEDj6tF3WvLN5keM9XwPj74KLt8522ydkmsiTuFkRUDdS9zpbB54Q6DgiLgQZeaY3CaCrhK6V",
  "key12": "5fbdfeF2Uns3QEYRccPDrob3NBLuKPSNvevfCzDMEXTogmjHPvVBa3iBD6ap3htMGpQeeXyZPJqoTGo3FC4Zy4No",
  "key13": "3JDtoBHziA6qbtNwVUbJWX4bSjhxGLWRGDDKrpu9oZKMfDiVGYWjW7DPwLibynwnBeUkbJfywiP8RhiQtUzcb826",
  "key14": "kRyud5gPUJrLwibEjGA1UX68MyCnDNPVjk8MuYasXcNJUihhsPiDDywf2kUsuz98Mc2iDDBT6BiKeSEzcfMWorP",
  "key15": "3dubva8ECEf92zsnAwZyMvUDBpab4dsagM68iuAPA6wiSmhYHUrws59JrHPws1d2nze5tgymgNnxEwSiAwBsm3MH",
  "key16": "49vPZ1KhWE3ApiErUBR8RHuWQPUwybHNfngm61vJTPkfUWszzgAEov5icQnWhzWaYXkoyiRVwGeMM6QadCsLyr2i",
  "key17": "jWLWTUpzvvj4b6iuhNzLRCYRuBi3QKbDDtFL98Tnd4UZu5prFX5KFzTaUf3BbFgML5v9miDFGAwnZNZmXmYgRqE",
  "key18": "8SoQANDZ4PiT7sRJkGd2LDwNVpg9CNm9LLLSrJMRWs9ZkKbMi9CYqM82GPvAsjcLJUwmryRg8DiEGBKmXWw5kj6",
  "key19": "4C22JasvhopzBqM13B4DwVGjxEtBszMLYyS9ns5JTJcwQoLNeysdwhv5Y7XA9392MHm5TYTnxbRuLYWQgJ99abrf",
  "key20": "4FmJihzj9oc6N2LRWBx1C7QPRcfWjyNgaiJbMfhBPq2WrFovMLJcwto8tauQiAAJVHaKSoxAa4CHpkasLeKVWHsY",
  "key21": "59RhwQVjvdzANgo4La7cpEMRziQzsKVer5VzzniJn3nwC1eyV2ECPBKvvksJL8unMJmUC1o29BwMDbMfhQuprE6q",
  "key22": "5VNWN1ofj7NbUGQ3bRu7QJiqhBj131bWhBvqGwQMZwbf7Uz2no96EkyALrn8FbBMRfdEoFqqcrpvAkcFar23exbe",
  "key23": "4fr7pr1WfaCgx9TT3D6TknCrxch9QCLKNrHUXh9QgjqQqsVT3Cwh388sWieN8C1Vh8za1FbxJrnEdntR1JfbLBgy",
  "key24": "cbmEoH8fnjSFQavnSdaF8CTSsjRuRGsXusZUDHZK9hcSWiGWuqSstuLJcZGNpyUuMDYpdbF6vNmTQYDL9h2BZJU",
  "key25": "x7NqQEioA3KsuAHgusjC2jdoVo9TnKYkuNF6CbMViA1C6EqxPgRAjrfCD7qXngJe3TUaPHRAv8iox9cMSkyY6o9",
  "key26": "57G1p8NpjBvgaBYzkr65AFjBEx6v9m4cqCGrPJLJt49ALP6c7ykvkaCaNboi8T82ooRggsDFUsVYK2VdmqZ3GvHQ",
  "key27": "uYzabzGfrcdiSXKc3F3H5emXQtuGB7pNdtW27rBvN8weW9W65Pa6UqkZerzMy5ib6sJpGQL65spu1ALf5Wy3b5U",
  "key28": "2WBLcBh7kiZ3hKLwsoV7fek8tDVyAT6JbafY8vB4dg5o2gKECvhc3bXmywis5D5V4aGjsztEW2DseHJ7CnsNvaAC",
  "key29": "2kB61ScURjj2uEk4KbV1bUjFC1sFRiTpThA1nhJ8gxenkFHXoEVQAivzMYY8HzkZfjyp1rhCqFWaF2t797sUGduf",
  "key30": "5BzqeuMa2Xsyo7WjG3y4yeWjfWUeMAtA7fYvz9Fx9VWSFutuwkY9rwCN4WDBzLMuJijdwSP8XfL63bwzMuAYHqnV",
  "key31": "S4vc4fEEAf3L8Qt6he6MYj9wqASh6CPSvKsWuu8bmPMerz2PSHAZmXqa5LkA99FYWERerFJQAW9hdUvAFJ65H2b",
  "key32": "5XDNQYqNZx9GT5af7Mij284Ne8iKYz619EAvHf7aEoF2kXy4N9hw7zTF8Ah6rvpqqF8fkXKkn33KSSv3gUuG9Ft8",
  "key33": "2ziYtLbBJRn4JAry6rQtV6ynfiVy5vKyjDgKG9DhM6FqnFYTV7Nw6nt1HBQ3HjZkYE3Rt2HPmA8A5GPngubSw8BS",
  "key34": "54Ke52FV8Sqt35DZjJ9mCJReAMfPeHx5wCdUdvHcYA55rdohADv4AfQ9daJqJfrzvbuPdzYiEmiouyPYjDBDXX7x",
  "key35": "2FmNHzbBoXY8CATTHSkZav9s1TENwLonN4rqUiZAzYtxyDUWUD7MBdw8YvQNFy9aBQiBSYwZzo4bxNBcar9zwqV",
  "key36": "3ymhzkXLfwMqzRMpivjCmqHGKnD2sJ2USJwjaNmJ6P2yjv3rimLpjifRiGTvUTWdSLn4hT9fYhFxteAiiyVTnCiE",
  "key37": "4bdC4PtEF54zLC3WexPY95jhDN3VGcht2JJSK39ec7vWPREpSYyT1h7NvtAEwpfynunVvvaHDw2fqJoFfb3juk8v",
  "key38": "3skbz5tCNkuks1FV2vnveQYF1hjTP26LHqBD1N9Y33nBEzMvmMqoeah51VZjkLtS31ig1CbN3d7qbM4YssQRYQn"
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
