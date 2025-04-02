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
    "5oCQxcTJfv9GEN4xs21HajSzDaTCWmjqXqZErKBnGdExGsqDMYvDVbpT2JH3SzqnnF5siAstaNg6RQaxZ1YdrHsw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TNUeA33AD315HaeKmYFvJJKnSbpzFZxeMjvADgpykZUgP3NtGkj1XDvACf1Dmgbxdym3rzwqgQUnWW1zCrB1Su5",
  "key1": "5Y4iZbZ8rnLPjc4im5umnXkYUnstS7fZnxRCCP45ELwurd3ox7mdbZfXMPgdp6o6pdrzbX2vqaNiSyAguorrTYES",
  "key2": "2YSK2Jdvks2zF8se8Em6ZQaqQG6EAhQbeqmrDwntFeUVpemitgCCD79cgccc8uSpCJVEcejfuo1DcxJ9GbUn4qtZ",
  "key3": "29Cz2QZazBUC2cvUvrqNxkCd3k6XeFGywYMpMCmbEgb45DXjLpaKSujcCG4SzZBeCL9N5ZGzAruZEiCYQ5Bjfjye",
  "key4": "31EDNMB9u1QDnR7zNTNQir2GTgWxbCRahyXDzGwfggKQV8vxfSDuUuphqCZmfnrCqiA2KEMntpKqs59MbPMY7JXo",
  "key5": "5mAu4iL3mutsbWWu1c5hT7JrUAtqQ693T7p8wWUwpmkdUYomSiTXym5tTTGwvbFhAzWeAMrZZXC1waFnMeJ8zs7e",
  "key6": "4B22yUcmpZhx7u1mHwLhhQTQHfzFCiyoTWnrBQdjpnUG9ZUiBictUJoyoAea6n7LFdhd8tCEVGtcrd5HWpkoF9Lm",
  "key7": "4gvngwkfekH2SukYDaZmGhKpgW7Gy5wwujuibY4Uiweg8aFNMYDoYKZQvj6vYza1AsphTGtHyJZKftpgERxxXbAW",
  "key8": "51pvUVNxHRudcmFbz25re3vqX66o5i3bHaZQ8xZBpH9PfKCi6NhuTnrNikuubDJA4ULGArhxrgF4XqbEFshQ71nW",
  "key9": "3Djk5WoJVh7e4WgN24vNGDsP8eRZ5xBZtZM9E1pSYtbLmaUFnd7EQPzZ6dYiQdsJ15UfC3HysxF7D7Nh1VA1qriS",
  "key10": "nLMFxL1dGZYPqGkgmFtzkCZbAn3kF1Wa3R1yNGW1cAMR9tVAqX3AJVTGFpNLrykiTkHQCH2b9yPu1S9kuauNubF",
  "key11": "3xSwidHyGojUHHJ22RTpdSXtLCKjHN7qo8aNNuULP1bdHYwWzHcaSdi8YNFMNCuhVzhoCMiaEqrc4mxFETmcCPYv",
  "key12": "582X89DDn1Pfk9cbWPCtfpJReWUmYJaCpecjN5PYPHbaz7JhVjz2XpqVvczArCrz5DzhLBBHwNyVfenoEbF4rWvo",
  "key13": "24U9oKZCvgFP2U1fBjhAj5rMiqedxd4XdUHkmDmYQghwbxBoFNLtsnXw3GHDdeWrmz2RRiLWAGKz5U7V1mXFhfT1",
  "key14": "4tzBbVexHasnynaK24gs1rjx5ihzMBZfSfzMrNN1Bg74LZGHrpQKk8XqLFc59tZA7hnXUaz95y2QRepDh4vuqUsm",
  "key15": "QmQzu8tQZTiSAgL3WqVRqehKD1LkjcZdyaUerepVTHvYhC6EzfMRsXoBEaeyEqki6xEEuJWWAgTjXKn8WnPLTfo",
  "key16": "SfxVSPHTq7YXRRrrGuvGg1o67mUEkWNu9QSHaRtGnCDyqj8AKpx7fHWnRo3dnMoSPvgzZ3jHkMZBjLic3CQmaQg",
  "key17": "5cQCJRpcKAFo2N4YA34nUoWxMdBwpaYFWn81Ski8V1nTbzLD5E4rZ7hasS4FdVqGDXF4Ft2iGTBdgabUGYUuXq3h",
  "key18": "4BJdtbqtfxueCrNrz9HV2gDqXazD7WwRwehp9ddkVmRSdxyG6v7Y6Lufygmt469Xa5d2FXPFfxtzWaoevWUzxhoR",
  "key19": "5bBPFfV3qeNRF8T2wGiFUfrdticgwhia1gTZyPdKeFNK79BxFHKyQdoVeAQH9XtTZUDxhB1Z6kSM1dmAsBxFFGJs",
  "key20": "3xgx6Q9aYgLnbVxPjdm8G4UKvenwHHhRLBBNqhLaJfKETrQCzZotEa5DV2jf9D5rAynEcbhsJzEjLzL3RxPuECMK",
  "key21": "3dtFyP2o4CkcyihaGYFwuNt13qvz4wi9PfuYQuPLhCfXMrvKVPNBHVbT1F23TzB8aZGHym83xPLs9iPWcPkof7zo",
  "key22": "3tDsBSYBxtQLBxtdfaiGRWJUfXAkApkeFYumZhQnoZFAnoKgLXZTkjRQzrV9e15uRfpnWbkhh9bRNo3BmiVehYqr",
  "key23": "5EnWxxJrNern53djrRdu1jDu4g4j54sJtFQkr5caMUTP6mpuwujyrFMjmyPTpsYz6yPb5fDQvKyQDRhY6FiWGp3X",
  "key24": "3MoMDYjFZnvx3Ujkmi8rDWc7LNSUQ6GhAFEfcsmBLC7W9VcCySWw581iAp9ZGbC1Hw8RtE8UEMnPH3Wzi3idvXzB",
  "key25": "4yhdqPfBNg6GmWsyfwpByY4DJHbKJYZ7TvVtHicwsgg6zwL91zrdWm8so6CUi8sicGXfjQcjrmid4DJ7bEoMSJ7N",
  "key26": "JCaDvnrAW8BpteJ4NDgqYAJFRf3QQcYaRvtiBbu3x8SR7aCQJteVvE1ggxgqifyaFLRJV1U5H9gMcuzmzoY5ha4",
  "key27": "2i4zAq6YPJWkd2ZTe6TLuo2isPhVBZFPzS6j7zkGuaCT8Z8vj3UVAeHi4pKrR9ruHstT8xkhL4vv7ugjFTmoZb9T",
  "key28": "5BxnrZZt3yuUWU1uKevmhiPGM587PVUGXE4wWoNQVJEYD8NLFdDqbmKdde5Lbvg4ZJPT4kNfaYDX6ovB9WdFf5eE",
  "key29": "MyLBK33UhYw5meDoq5LKxothLNkesJLiXZSYRxTH8KCAapZe5eFwUDZoApJeiWQ32M5MTNoXon9jyiVNMWABmWp",
  "key30": "5vivG5vaGwrcHf1jMHPdNrB4ZXrtZfwgjjjQ7AcyNY1EztbmEtTTTX5E2Vfzc2qKX2RHV9GQhCFAFNfsKhEJoHsv"
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
