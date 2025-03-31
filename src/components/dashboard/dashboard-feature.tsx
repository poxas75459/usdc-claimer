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
    "5sNs4yArz2aJzgdShX1Nfr66AjxaXTeMvFBqVRj3ERPz76TwGVVXENDQTsfZ2efshaEhNwCwV8f4QzMGMKc12nL7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bqntxZxNDqv9Lsow4ZQgjWTksPjVGCfyJ29kRrns1fKLeLG4VXczEdeGmkoqmfYeGuJkrPpHX4zLfNEAXNx5Qsb",
  "key1": "3SnfKwUD9tWTTSquZebXtwSUkH1Ag4WDp9K467gDrAafFsaG6ow75pzmC482aUAvCxjczCbAsLn5TcmynymmtenW",
  "key2": "2ZRGW7WMaB9D2CymyP1MgPAVhRiWtGEXDCBpKHxPTyGxnQzsMPCzd4bTJUc4kyRYPQNKRGq1xiVJiJdHXRLm5gZj",
  "key3": "3csBcHMiBCYK15kpVQfT7CAW2V24rbe3nT3Y65qHd7DQa1u5fr2Sha3fysZoPafNW1R83ZHabN3rcQAgqfw4cHSX",
  "key4": "5gSxGa6AEXuKbcSkoy2jm9j2V5Seoir9VmZ2NdMVpppCQQZ329ixT757oR5hSZhADd7PZqiuXVLazLJC7Z2LVXP7",
  "key5": "3996dNhEtznKRgpNP9YJ1XQYpqZHDSHxzKTZ1DxFG4vrNWTaV7b7muuEn3Mjfj7H1njL4Bgwy8ZjRVp8g1y3cuEd",
  "key6": "Vpi6j3RQqQvg4mi5MNJ2qpvLwpcdgXqzs7qS9fscrGzaydcUKqRsLut6CALGxqGAQjUdR5JL42HVPQFWBu1guNo",
  "key7": "3Z4RH4Ydwd5aq5waTiWrBvsFWgqQGjbzzUq4Grg3mjnd5vAVMiEqRUYXfbhpMQwoWaB66t3tPDC87zKKKQcd9go2",
  "key8": "3JtXttNP8tBHgQfbNFdMJb3vnWQq5opDTMEM99q6okRsHE2h6zQBFFopCG3nqNc6LWXtzVB26vuStCdtBnj3CF9y",
  "key9": "4EFPjvBh1RkuwtN4mgX14EdkVGr5KTVrVjanfTaTiokr1rxS6LumTtbqHCLD489jaRB9TiwZVmeCzzNDVim5rAXS",
  "key10": "4zn9c1FYw9PUuzaAo73YFPiozTNBj66AhWEFFsbnx8gA37reTUJ1LuwRv1siq3SVBT93M3YQDQ5MDXu3yAiX33pc",
  "key11": "4d1oReR3tMH4o4GvCYtBpPWuovpr8Kao3p5mwnaqTJ97mfy68TgxzhhxwjnAHBWzw4rx7iB4fk6t6tno4JryHZYA",
  "key12": "3svjds7u6GG1djLVDRt9nS5mgp9ae5nB4jLqM6oBE9B2XXBTRQzPYMD6v77dnv1G1c6UHmrFd4NVwhG2WPvKyDuf",
  "key13": "3pLJtsBxerHMxaAgXgN3vny2DXakQT4jxVP8JrNPet1b8FfH79YvRcnA1G689SHhKcjeiPdYf5f5nUC4frtQEZHi",
  "key14": "cUDypB6bZSdxUo4HVTVz9nDpHN7yMqe5HTccXxStWh7cCokq9AP9fGrCzW2LfHePwTvn3fJWLmWkqJD5YFnjLVs",
  "key15": "5AspNtNdMNCDUu2i8yqSyxReu55aFaQ9tkQg5BCwzEkWCSKg5whKW1LZ9DFSKvhdcvqVAJHUZzfiJn9Cc6UtyWUH",
  "key16": "3ePLz6cjkgXnRYbzSB95RFa9M7xuup9ucwrnsjucWw5cxfKCNJuHk93u8r4oVomiMoHm1aPEXVd1SPjbLvZHMgfE",
  "key17": "2S8cmspg8RkuK18rth6bqMUXUax5mC4M5i24XjwS91DrgmJZTLBEFAi2G5eVU7yUjitAvtjTzyLzFwyxUdSv62oy",
  "key18": "28R72L3QWuoh4EHgeqcNRYs5PpJPCXb3wDSSNeEz33UaALbp95RC6Aop2imAtPd56cx1D4Kod6SeWWeT5spQCyuH",
  "key19": "2bDaThAcVv1PBQpNyCRj6T1rPXY6KBCf7LskJPF1zbs8S5cBJaN2HZHQvMBNF117ereNWMT4d6qaj6AYSC4peTgS",
  "key20": "2EawPjRV9sNnTdifhgMYnyWFPKoSSLtqjmdXU3S6JymASTvx7G1icZUf8ZLSJjzP1HFmeRtkA2UbpfEdiokZnFa6",
  "key21": "7phZGyoZUWepAChbcPyC7NkkqYKrfPXiZqUP4PFSsLjst5w2A2JnagBh8cqqBch2J2nPrSuT6kquFBqW4vXiUVQ",
  "key22": "5hCVUGBjCcJcFaUnSHwRTY8W2tE7V8akR2LDrrPj6G6zyDyCd4fQycGFWxfFXVMeLvCxt9jRMF5DUZd9TZ7mxMk2",
  "key23": "4KUB7Q574MqS3TKpMHsUhSMQaWVnW5TUxa2FUG3PE88XHuESMqyg9kpg8kF2XC6tfqFGEBQzv4f2q2QMRaReu2F3",
  "key24": "4sVRLE3AgsdfQmrAdMZvrSmHJXBfDqJYcuPLBzBT97CdVTuWRPm1VbEKRbW2YEZoYH5T6MobNxYKBF35oBynNkek",
  "key25": "3UczPXSprp66W73XAwbgvu2GdCPYk8Avji7b2yRE4isgwfDu1NYAxc83YfDHjkN9B3eHjnwQdBdDSzw3ZxYjPBr9"
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
