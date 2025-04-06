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
    "39qtxLuPjKENXb9GAmK4CSWmD89VtgjrXyDqJKjsgZVBPW2bQqy49AHKZ1jhN7ewnbMzbMewcjMA3KFPcuKDK9kG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VQdB3hMEdiRpd1WJvzmByFj22o7UDG6NVC1tTo1mtWXcwTm5WcQ865ifJz8jkeg48iN1wPYFzeUoujti4Zx6NSx",
  "key1": "NfM84y4vMxZ5NUA1NnF9akkWn7Z6stQdTeE7eCQsx23MraPt8DRak3kyZ8jKDo9sspc7KJepdz24XL7FjbgtsgU",
  "key2": "2irrdJn3EpN99iCMKq6DhgCWqr8njASLhreeFTZDJVyjSw5Yhdpngoq7tkfsoN2jHDuuZffVJ2jR8CtczrPhNhJL",
  "key3": "4KoSNWv3LpuDX7hV1ptcJTRYRqDHeakBahpLDCGEEYDXGnoi1KHkJPMfg1WUsSVso97RTrE3f98t5r7rSbAyBfPb",
  "key4": "63ESBERDpTRDaohbQuWfSTBKybZPXLJdLL8gqKYmEv7K1z2Rsk86SdE6Refb8TBm6EFgkbYLzsXsm3wUBbgxPHdd",
  "key5": "YLmFvbZ3Xuyt15P6DAvPkRPks7qmpVGJ7XkqRsLPmaNzzS1xGTFCD76K2TYjUtzAz9fLjvkc6qFrH2TvivvJY2j",
  "key6": "2k35JbDQeycebNTDCqzfj9bY1Xccc55BXbK9tG8mzqc8hGRxquh9T3SeRZteZ9GZ5ap5miCBPWp7QaCrdmsMapgJ",
  "key7": "5r4KjY8QHGuvgb9E8ei6FG4NEnoTJBuTkV4VWhddS9i1kGPro2TCjVQzis4KxmSfGEsqco5oenHHTsPb5gXShBo4",
  "key8": "2XNM5nm8PuwWFcYygbvgd5ZMD3yqBywyc2KEK7ZWinLpNdsUgQPmuY6VwPz5ErvbQGMVQyFuuqHbTmhyFHsLnKpt",
  "key9": "66XYqMf7b8mVPiMn1CQeM4r6XrHLGv4PMBYLxNACpzDWseQkbdPXYVCKQHeCKffpiGQsZBvcA5G3899y3ZQ14CRV",
  "key10": "2utAkYBkcsTkxEf6N7FKwtYzUXLYXRhqrWPewhFRjxQdNNBbaTnybNs3C8LqDU3oGDDUE4pW6mGfzDkwacrSTXKQ",
  "key11": "2skZ8yGTcHb7CPoF28yTT97oK36SzHxTZ7nANqWqiycgupGkCEVVTfvSFvKsEUK4tYAvXWtXNKnNersKEdL7xzav",
  "key12": "3aepD7PJ5JkCxSPMq4DCKU6SbFJ3747f8XK9isXHtfgE7HZYwms6QgCtWcLPs61ZkxEM2A5pAdChBGMSs1SS9T6a",
  "key13": "5m2c1drRbxjy9CwmUfz7SShZNnLB89wj6M7YPBHdUiHxS8wxC87mKdZ9bFLKzmmVjXPbGXzeFRCpp6dkwERsavxk",
  "key14": "2c1MHkeeHDeC5uYwWNxSQdSZibtyc7iFyC3T79CQxKoTCbxiD4HWsnWSmqkdKrsTGTrLP8vzPgqvG7Qc2TqAany1",
  "key15": "5bHhPkbwRSHhrUr8fq3mudEvd9zknGdDGJnU4S8qFJXprRYKvHtuAGeRN6Yx9HcgseBhWEYDHThsWkbgGhsDmmr7",
  "key16": "3VmjdFhtFUVvotvGomSVDrw3kvJPQu6QhHbynm8bMGfR3RkYAUPKMKBj4ZAHBucrPQa2LfmnQc8uTFu37QTjJ6aa",
  "key17": "5w5Ja2EKKjbvXTNrH8TtWaq9YcZicjwWaE57UsMiCmk7xrYBd8oXdU8vM4dYUcUmLPGTBWZ2xRQMGAfgi5Jfx3Dc",
  "key18": "5shSmDbatb4She3veWtXZ8ddAZ2jc8k45aaE6WMULpvudYoR8iCPjYmyifpDJ85DRUiUFfzhAVh8qziAfqwpMQeS",
  "key19": "3oQxXS1nLLrikRABRsqMv5uPsyaLiqXWRFcvRUA45CorGy9ZRFemr4YsVsVsufjs4eVTUiSXsdpsuw6rUmsE5m39",
  "key20": "RUxSCoe4PmGwcREhNaTdYTaxwLjmMuR6HZJaRjbuAqEdTV9WYZSeisarSHF5z3vaTZfxXjSYFAKvieD25zENBVs",
  "key21": "4FvTBJTFdJVEn5UePhvfHiffftYSCghHUk6rPd9aftoiwFqFxrbd9P4eQe1d45h64NJJPRwY1jEYM9igrgMKzPs7",
  "key22": "5jSP2hwuDUjGCNzDek1KurySsqVHkMUB4642wvBkRjYjZAtyhydEfznpaGPRQ6NMKXHRHSvY26NuP8h48tbhazuN",
  "key23": "3QLBD7RN9hxUNnzc77zfDMJDyiZyYhv9KvQLkGjPVoezkjTzVRTg4wPBSwMrzuonGcRVigNk8akXKbj77bym9gnv",
  "key24": "5pTQKHE817UMyd2aApMaigarcY1n6uoCdoVGF5DnmCd5BVNG2P8RLMmbkVTdimFtHfjhW3eEm1E7mZ2uhFcTE6JR"
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
