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
    "cAQuBLLvEA2WaSrDGb1ahuNnrCELwdiZPCArbu3WndRWMM27vZ43EEpbqjHuTvzBmN9RkES2reEVAydQuETcK5X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RDkHfUkuB5AU8jqAy5MGX4Bi2EMiy6xdgwJ2X3sJ8aE1k1e162N27766jLLKMvsW4n7yxR9AWqavQHuSVAN2zFC",
  "key1": "2x2K6FBeFFdyNk4mDjN84yAAGq9vtg4foqEhEdLJkFSnvr5ZyUzxDWRZxVE6eid8VTLhHvrBaJ25vmobyUVB9tXH",
  "key2": "645xqLN5ebtuJDiHNs8Mgowrh2YyzBfYkDgaEJ6hwcmpwqm1DpFH89DiAE7awAjJGCjdhCsuMMpKPxcEUdAym14M",
  "key3": "3ETRKT5m3vP44VRDkNecX9WwwYJLBhCG72scg2QtKqSLEZcTn6fFfJwNBzUifmZouAKqbqHjdC22LhH2izxjvXEw",
  "key4": "99yVfy67jwecdMhiAaYGNvLaegvFfeqTVkGz4ofQWmfLWV3fZGDbGAHRg1j5BAnrQmEFMt9nbumvHyRVo3Hjw3v",
  "key5": "oSMCQ6iCqidznCUcrHzC2EWu8813pqqdf3qem7ULo2buqMPob5DER6EiocrggGJvFxmsP6iEZR97rGoW81xBHC8",
  "key6": "Wvi4i74DSWBWWKQkL1SaMxe7PwFgaPYCcJcd1dktvPHV8zRzSJwZwakjxHNBwUZmub1gV365dj4WW9JuP7LoWVP",
  "key7": "65cHF8wnvpT9vkAFXbKywbqeRg1wrA1YMvXNqqGx3SQ6QhXu7VUCJn9Niu78S938XjZ7SKKHZuwtNhtKm33DEo7v",
  "key8": "5LotiouxZKoZg1g5CtqtzPCAsnrYqea224oE87tTPty7FeNEpF2V3akXCKwLJqXuhUCAba2qsHGAAsPXU1wZK5jm",
  "key9": "5ULiES8t77bYodCzihBPteL6JfCtzhSvb1ZMa9UwRyoPfGKQ54tdBgEoPqnC6efNMKSpTAxoKDdebauAHvjjo61u",
  "key10": "467hjrCEvxcTzVE7ff8tLRsLGjsdaGdX5pmzZUrtNuwmWvrtw5dq71ThUaMZXFEbuej6ykgkYMixZ8tbdYmnZ1nz",
  "key11": "4AgGrWiXEmJ3zk1KerWRA9uATuuNznFX38ECaUaiyZLGKV85iyJX7drSnK9DGr3JSznrqnfAPmwfJGpQp3qqd7Np",
  "key12": "5UAtQYxmeRRnygQk9DesqbNJw7rQZJscrxq3383tYSwETFieBmJyC5AfbfZzcTGcVtoz6puZCVZyHSsHjw77wCbc",
  "key13": "48QfeUmiQwmymUiGNk5Yj6ZhprEzx51xPNcEqLrPL4hUtHwr1Fex2qqPZpw5kyJ1HcnU3GGvnKWzCT8UtLqpFQMh",
  "key14": "5kQ4MSDfmQQqCx1LaXdbTHhhYfma3cWEC2N85Ct18sBZeTXj7qoDq6Vu2Loe82tfzaQf9ZXFhuZ1BtGNav2XACpc",
  "key15": "5iRPXCe3Hf6AGDosRzd1U2yZzLt7d8J21Xx7Ttdv7pwNh9qRfsevPhweQh92BcmWFpyi5yUSmJFFggj627AW3MVn",
  "key16": "3DWsRAW45vZazimYXgzXkwLgyCUMaHiAU4zBVuKWbnxuMvpyKw3SY1eJ7w319L6zHNu3UQMPhnGsbq3aMQUS4Vu9",
  "key17": "4NZK7YYkoXwqAwfErEeUDGt9Lwz1gfLac1ed9W1E48fetUjs2fMAbqFNXbH1istmEpcHYfuwtp3QypLQo1s3Yw1u",
  "key18": "2yrBEJ1UZEhGKEvfdu3WxqMjwZGbwHVE1KjBGcWFc5TMLsnmvoEvcY9GRYjGrwNYXaNcQ6imTeJJYD6Th7MTgpVe",
  "key19": "ozt7YVxNe7byZxKGW1KDRX5HbSgW5RRViZ5pC3bfqV6RnL6cQRA9DtSBVcQURNvXkZg9rogsKYPYjovRXrhPaA8",
  "key20": "55T16LVGmixgtCiyrHHcSMEJpZ5dVUKh4CcdnprS7UT6xufxcLk4LKNam9AXxCJbT2tztQicUmQyG5aUK6D7xWsq",
  "key21": "45sEr6TgSDfnj3DK5FojnQpRdmmD8SwSonp4EpqGB9iKzxL9rwDGNWpR35k4DwsZkFiizrRpxVA6q8AAVbA4jJed",
  "key22": "3A8iPD7ubc16MyGEm35sCy6xkKACegU8RFtETucEYQfEsU6cagu6HCYGM5qHzDBkjgFjED7btgkbLKodrmJtNGrC",
  "key23": "4nUcv2jHvHTMQXqidJ9FdCTi9MyHcgnZHTDPxWWCBHQMM3hLkVP16AdNsf3v3yvLWLjui7CPCrkCksK22ii3dgkL",
  "key24": "szzsmNMYtW7HdKZUFHVHg4ocU3cpNxY6Wit7MGFbodLibaexZTBiu4SA3ycyfjEQ6UBkNbMvp4Mdt6oCLUTWXdH",
  "key25": "5NTYvKM1J1PCFj43P8wLotwTcxYyzE6GrifNQkYoxczGToww3uE2NwJguxFLyo1mcZvWmyfb633kVdMUaGRcwNaE",
  "key26": "2msxyVN45VzaGtFzfsDvfrHW6GJj32y7HuiTgoCc92NHpHjpfMDFApnuDQGrcRqTSL8TLgX87b7n1evuFawR57W2",
  "key27": "3cqvTdRvQbdiLG83n7CvKUrLESBB5NUEX4k9tUwm7C72q36aiBC7oCJTHoczTrHBk5BRFSTmDs14zpqghMeXyZM5"
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
