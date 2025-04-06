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
    "4KP1CpwmPsJnhEAEtGrUpgs5L6dChNgCW8DgnT3KCcTa55WRwir2jKiPeTst9SDrYKr66SKPEFZzoKzEntjPpJ1c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "335MU1GU5goBbNWfSnFeFXVYYbNfPPwu7hnofnqY7XZrAgCWNMdNmFUWHgn6YiWeZihPXudWkEDiTojyLA57qxYq",
  "key1": "qRzG4yEhktbfTShmRRtkJ685pL6H3g34WpMUU1MMVktLsVTMUGwq9qtcMgb1bNVjUUsJHmyxZSYeXaQ9RBPr7T1",
  "key2": "52h6vrDKwF22jTN84tvt8mo8ANBysUUt1QgbavqB4Lans5LaVD4zgZvYPxJT32wDVqtD6ReSRRL7sY4kxvyEQHDt",
  "key3": "2CgkSi9c6ehZMiHdm6yxjKa8rqoNiihuN2vtbUAgszKXBhfAsUwHBUqQA5hX6eyGtdzsP8zqmxk7natVjNnXULaf",
  "key4": "5Swn6Z8gU7KuFChPPaYmp8iZ48Y57vBNGEAF8ntSVKwEVRE1HeB4nT1TSK6Rm4oJLEbnqT8n6KPTorcLarqExAEU",
  "key5": "4mw72wMZQmUuffq84REJmhhepp88TWVDwBaNQit2VwZfRenghkQPR3atpRKMXET6ABywKWgHfWZpGq6TrzLSqidN",
  "key6": "KwmSkaD6ZZX6FxGWCf88DLCen51rWUPz6RocZPbhmXXyWC138wrNm1sA8PcBd3inbFMPpGCGVv2DmxC6oYQ8nRg",
  "key7": "5hofBqZtTBS88ggP4ArRJxUL5ovV6iz7L3TZJr7wQAFMhmWk4pKzXgbCwdGsXScToZDjC9patKweaQPDN2PZk64S",
  "key8": "3bL7Sp79wS2CKcPDkyMmMwDGF5y3P78ABLtkZrrS7AR26bcJtQkf5cLcNf7cjyv1EjiUxb4JkD6UTo2szKM1bqq7",
  "key9": "66snVSnf7Hz643fhsHFw3WnMUi1fFekbjnL7Rsn7U2R5wRXJHRDRBD9h1j8HH4n2Ms1gGFVf1iW5Nt6tEkWqaxp7",
  "key10": "5tacHEdCepbDQ7rkhdutFLcDLVx1cq8aLGKoUdvHFpP3z25W5XXUyhYF7iMdHAgiXN2RRzARKVekE4eJ81vPF5kP",
  "key11": "3S1pbQcsLd3sXU1UL92Q5JWzkF1146iPpPxEymwD62FDGGpmzLHcs7wTwHNk1ZgMQgoUNPT9YdUnALyX1K31sedp",
  "key12": "2gd8c8bVXBSqdgre6PCkEiAidD53r8w72GmJVRz2GzVLc4NRRKAuAZmJbn3QACX8anQ3sxz4jqQCo8zgXiEGffc8",
  "key13": "CBDytqvrhP7DJi3L19LFkNXb43ZaX44pFTyVtQsYB3jR8jBHRcLGGaH6ZcnNxnz9WVzrtL88NTKmMPh1EaYNDBi",
  "key14": "2PYL5eGSZAhkyky3Faxs2g5sLDyZpfnqsvqisjRATywfsmDcFtYmi1XcHhBPC76GAETNH1VHMZc4XbqyevhRb14E",
  "key15": "4kx7hXjmkhE3CuwH3k5EFTVK5oGBy1GNoTHxn6iF8xNwFKtmsLgq4gifMk5bxcFHp3P5mC88FQbRZKXrKQ1pYctW",
  "key16": "3xLkEiAt1EMCiPdhYUJw9SLzFVD9FwTBuHmzdA8MHuAuYrybvyUyUEYR9DvHFVFm4nyNx1FffuDwMBUzccMcQWi4",
  "key17": "TRfmho5rjSesiN16YbADWCUreDKjuafWJisBJPxj6E6BuvpimV2SMx6VYSedrakVtqjhrwTqHKuTCAvnDdETmUk",
  "key18": "5AuS2Hsp7e6dBSKsk1CGe1AZLJTC88dUHzuK89uupuAPvbcGdX4nXADfEPJ2TibqiouQNz9SfcEq1FpoT3Hd9L7N",
  "key19": "oyxSPmyGH3qFy29Ran7PmzEidEBNrgs5wAPgh1hqn4oWs6jGEZ1D3hoAeruo3gyLkNacB57G18v2F2JTKVJNLEt",
  "key20": "2fZtTm579Dm8uLWfv8xEHDau9EFAXmxUYDaPM88e9EUk4q7aavBdM9nxX3wSdtYj37udKmMYmnnpreR1AywEqdUd",
  "key21": "2dYs7XyCra7BaR3G1eYCYwbnbTtKgjgBhNA5Lp4j2wtRJdwgo5NhT19NDibccxMt34UVpzBnQ4kfx5nka7ycn18j",
  "key22": "4yvJwW6UTTkg3t4K2YA8785vwCErT3ez5CB1aJ4t8eLjDv6CXGnheV7SuuxfowLb9s4hQjeyWjobfDrf75GGx2tG",
  "key23": "5p7R3PD2YC5Rspbw5THdUmjQNGyVyuryyFBtmBwnFzaSmjsy3zxtZF4wF4QfSzgkjgGeWqSGEf4mRE1uRHSBcmLa",
  "key24": "4mAbzdwKx4YAiRsCS2inbs1HR4oMeegRqF2xGFkzwgBvw79NYQGgCLMJng8D4RkHgCJXVX8G4CDkF5gu5ELLMDRb",
  "key25": "4b6P2rLeVMVnguaJbvPSKcxV4ypmS85EqN5HtntyaZyV8UP5bPtYfizmhXAFYAUUwoug2deEzbj6mTFRRmwQAh6P",
  "key26": "2G4gdJEs4YzbAQdaBoHAY2DZPXV3DM15FtzyM58ew96LkwFeJmcL2XDcATUfYjidJ3oVFjdKkqMXmZUMjS7eyoF6",
  "key27": "4TV8e2zGCdnwVXg19ycfEWwWVsMju1CxrZTuyb5pMNiGvb9kW2Rc1E8WtbqVM6xyvABkLqsSHLoPxA5EJ2GydiaH",
  "key28": "2DZfxemp57FqCeKzwcbXnHzHoURcm821mDVeELrbfRMoHp3Mka7AWjsFjuaeMRqjoj7qNU3Hh7fRh4jz1UtPxKBj"
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
