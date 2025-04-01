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
    "4q17Gq4ax61JDaBuhxrfn1fLigj9RvUZZDwYKjPi2gh6fkzrmwm24JAKy12eV6HshatirsmDs7ysiDErfD59hm6M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53GniM2uFQXcAZX3JLNzzztoXPAD6Re5fkbayi2rJdYs6K8BjuD82odayUnvuwGY6Mfd2wm8nm4YxncBnLqn5Lgy",
  "key1": "445RSrajUoBADPMyaEzDt4oXCPRRK5TfGtHLjUN79zV9qKVsPjVJis5V1wQUnnZAVKr9eMc7mQE8XwhJJPpRy26L",
  "key2": "4kRNeeeqUzYYoiMgVwurmUJ7du3gb1Yen135VCKwxoAzMjhTvL9AMKRBRNn45qcRKnVeayENxmnmKmmNMZVBhcaf",
  "key3": "2Wng5uZsgyM5PbDDNp6k77PwANSH5G55jQVXUVHZMg9Dz4oZTgCxAuTaPTKv2UPkbKdNLBsvFbLoH93ktAbR9sUx",
  "key4": "4dLRv8PYxxkYva99G68HFqfwG6HTSKVs78NBx9CteipdN1ySZeZ5ezjy1b97ffMjMfMfxzCBtnsnAQsrsptRrgAv",
  "key5": "2zAuQcpJZWNHjtFy4KvywoY1r78aoB1D7JZxuYSmHTE5RNrvaaCqGnmSE3LMJkQyQt3nVJDVskkKninszdod6e3T",
  "key6": "4TESRvtZdTgDRKCN2eVft1bmHKxn3F5W6sY6MQbHLrPoZbK6s7T9WMP3G7kN56kpGwNbYQacw3up6DeehJFqyB9N",
  "key7": "35cbNAiQC4SgWodYJscGVx7SbrKTS8fN6UACpLBvUY7fpkx5AoAagQ1FV9DWA86iVfP98jAZsaPGYi172fu5mHAY",
  "key8": "3cYivnhDD1uXoHKnmMEvbsUrghGgdEkvzQYSkRmBjB6mZVqgdj6K7KTJ8Tv5T4uwiLzRWSV7xJpdu4ioBzpeLjk8",
  "key9": "3mcGm1TVvcY51oyGxBB1XpGfWF5QqdhPYZDd3htAzXRPgWtEptDGEBJFHiue2YHgXpC7UfAnGFnW4RFRCixRtH5b",
  "key10": "3av9LmBWNzXSSpNZPCik1JbbfRgsqqm8HncwarMk3PdByE1aFWZgPwuMCzYsEamFtePXcYTJ69n6bfhdapSKhN2x",
  "key11": "3Ls6jyFPHVnuDYw47aSKgU6tTG5LRexZ6EkMgGbgG28C4wyJ49jpxMfKKTmwkmqB8DkgYqrwmHxJw9hWFDpicpJ7",
  "key12": "CbcuXTN5sXuJ5bhSyNYFMYCkxmyEqXabsixeUJPyBG88JDxtHMyymbWq5CNSvqZWdxUrj2gPkZ4bkxyfM9FEMYi",
  "key13": "RpvD7zLWgGrrmeJhX3x6MCTBErb5E3TN1HsHS93ZnxSFyta2FbQW4dt9YoLePy2bxDLoyGbtCbZ7Kv2gFQSobpR",
  "key14": "4q9W1QSyNw2ghpzc9dorRwkzKqDHNGHG7PsaEcti2TfxHuiS5RmhtJuA7aGm2iGLKB8WXvgbzYKmiFkSxdcTwj4u",
  "key15": "4HWYSNPhM49Y9qFFr4e2rqe2PzzM4Dx8AW9HQ5TD5azahrDgLj6dK4ZnNX4NCK84H5iQ2mUWNk48z3SmWjKeHkUm",
  "key16": "5iF61kFfXCDWRsBN6XK9KtiKSzRmLNDZoEoH14Avem3zVsp1zUNn9sJfFCyfhCDDTFf3QuNSUynDy9jnba4A2Web",
  "key17": "4iv94NmCtP3Mw989GX7iHSGD3RZsvyd2oV7rX584aAEyxVFjUfegLEEt8Auf2guFY9bzqRNMBvWfsaGCnBEUTDy3",
  "key18": "2nYkNg14HUEueeDpBDKV6gYmiuJHNv5LrxzqX4Dgbc1nv1buBEs1bZW51WEQBcQVsqYaQusAv51apXzMo9LMyKFg",
  "key19": "4Y4uayiPHmydcfgQSz1hgMLFozA3znhEQzAjDjZmsTpjrWJTL5iy3CdzGqbKCyRhEpFS9PqTjvcjvpc9amcRuWdr",
  "key20": "xivx363Rx71A6TzopiWCAVusos2CCe75qehV6JDUtLScy8RBmhJsBAjt2dj3HH82a6GCF9fgibuZwaSt1VTQ1mq",
  "key21": "587sjn6N4vsZ1aAf92wngCjvvySVqLakTQ91sDjvxr1LSAE6F63MJQhWjdByyBGb2ES8HYDkLZfvfVDaaWxMPy5k",
  "key22": "3iytFxcBHyahS1pZtHfRwytZrTfCrm8zsFSFzoMzUeiLUwNaKMhc73cezwrkpKuDTfgihP8zi9UEGHgdxEdFuh6v",
  "key23": "2dPYPhUfnM6ocuuS97JHzqBA6RHh5HWhPtiB4ztHwxTCWYySA3ytV61r681fAen8zbJU4Yb8wb1wrUDffk88GLvk",
  "key24": "5okEfiuaDYTwyJUFJDLgdVeVBAEZNL12bHk78ews4JJCKSA5pTbXveGNAi6RFoRgeGHDsTANsX5m18KsZ7XxSpo6",
  "key25": "3nmcA5i1PN3x9ic3RUCo4R5AhigzTNzkoZ22TiUK66V1JJPYBaY1rhPs9AF8rFeYyKqM38A6aJJyhCGaudF9MT5v",
  "key26": "3AVtZZ14dpRPyQdJfMDibVPR3AGSndPucmtykt4idvF3Nm5WtnqsX6xma5nCYBoUfAEdFLHMhKHxntAVpdFHTV8z",
  "key27": "417ywjcMajE2GyS9zXTwbSxzPtYgURNS1U1KY97mGg88BcfsQ3MdpPK7SSK7MpzJri1Pukn4e2eizTcKRtAvrWjk",
  "key28": "2Pyq1qPXf4RQMWB4XCvLP8Us381oR6j4kMsynXJGsov9vNeb7mFWFNUrKsq4sYYRbe4u1Cr8sCnbucs5x8u5PVu5",
  "key29": "59PwP84Z9PTWncCPXSuzPUdSNPBwNZqng7TZzLcA97rzp3eRfpXRSrkeZgcqZfHcuz5dRFs3invgo55RaBfvGrdX",
  "key30": "3v4jtEqVGjcBrKDv6AatBDEAKNMkxdWfAXKePtnHipNeyAYg9tC5nTAnFnYrAD8CNvFJ7hSptJT1vtDu9GGApKwk",
  "key31": "3bTcu5S7cnHcPGTjfGoKzR1XBQdytEDPVFv82nW9yhEP3ndK3WpQGto83AWC5pwGevrY2vQp44HmfTKy1WkzXSdS",
  "key32": "mqn18tfiu282MenNWb2mNTdCf1EPAYYsx9Bpctyk1KZTkVd6fjMUJusKxjMT3nJDkgVv1pa6UzAP82YnkPvsJnC",
  "key33": "nfyhTJhgNiiPH1ARM7x4MSYzBnT15PZbQU7UBBVQJtTU1JNFVREQuiFcUegCsqujqD1eZQKdHGHpdWaJj7gRnwG",
  "key34": "44MdTtSigXtCPmE9MyH3xbbQcERBnpRYKz9fYn3qJtj4sNcY99Awo9zdhZw8C59U6DdSo11WwK7tdj6pcP1zdQSE",
  "key35": "4o9DPLVuN5EaRQxwPhTcKjYGchQr3dK9zhkBE3LEmVFp5br6SdGN8FaLUvhYxMn5V5BYN6T59tJ2ERKGrvP3J1PT",
  "key36": "rC6PJ1eAyVVXV6eCCmva6P23WRpK4T7kaLcqWqeKozxg4yLGgs74m2FDFvG8jkD19UL3j8ag6PDUu3piGFvDaRN",
  "key37": "Co644qb1rNwN82euvtyp1f2d7RnRnrx7F4zh1ryxzEc2qzz6jcJdfr2z4UEX15nCt4yqNq9vLyui35fGSXBgUnD",
  "key38": "2RAhVunqH58d2j62MpJhHEmkzrz5V3XAitk1MD8h1m3WQnb8R7xNmmuivt6gc2U6cmLYDUnmYRK3uWvL7Wvyfkv9",
  "key39": "3Dou4gTj1CCGAsH8UaA61kenZrd1kP3yGT8fYGHcGiq5WexPDE6dQX9dqXVLqBpJeuZWPX6TM3jqgEBM9RGe5pr",
  "key40": "4a5SEnSozEJRr15mgmiFjkQXVo5zZQ9bRFYqcpfBXS1Cs51qc69aJhg8FCnYp65By4TQbfdvK2UjNPHsaGE6P1MR",
  "key41": "3W25CA1WLqTgWvCAoyBqJMxL3xA4rj9anRaRHtPVEsBanWfrSJgriSCmkNbHSaGZBxNc4k2AAZGuAeFTvQKaLQka"
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
