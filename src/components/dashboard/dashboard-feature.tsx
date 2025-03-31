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
    "3SArzHusiaS9XgtjbBjFEDm4RHQJDYts6zq7SfcLKay4YQE4dmLM6f9cPZHTxriKntmbr9ybZBSVzk358npaAwz8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9wNw7TDvwGsp9DMs9D7p4Y2Fzn8qtKrVcg9tcU3rkWohVoobDK67aphtCaRFnDJyQiHikkJ5c1im7K1LsoeZP5A",
  "key1": "2qvDVxZwRPh7xbKPmnDGPGTsUK3xrD6ZZwBC4c7U4TbQxuAVVRSksn5WNnGiZmD8wqWnkDbXyQPA9gtaYzdQhNRD",
  "key2": "XUCRXxcCn1mv31ZSHsope3KUDeBKh2seZab8ivAcZZ1nMRrMQ2HBrCtgSPGqi6m5qpvSp6MRocgi2ohEjwcdfLr",
  "key3": "2hi4U8ddLgi1q4iNvgQ1q3AxJbbjcEMYmXRCEDUa5tRqApTucPZ9QMbUHXNQFK2r8XHAr9doM1f6j9j9CEpqtkz7",
  "key4": "GmJV9xTEYuqrpajVo3tEsfBkJNvGEgwfXtP4PMdtSeaQEQY3DER3gmzifoqTMNpn43jaZyvEhJe2bW6sJ5e6aSk",
  "key5": "25agQK25cyJNMRNtXKkqh1R38UsFcNS6gJSwmy3LSUTUt4VtPME4stFmTYmdU76uF222HqpRgp2gwfj4S7pEE276",
  "key6": "TnGwvyLSPMHjTyTZEHYp8L943A8xKzccFcy7h2YPAMY4L1gAN1RgVoHBrp23bwKYqbwU1Wn9KaCABSfPVWXNba6",
  "key7": "2JjcqzrnwWhDGooavJAEUkxuTYmHbQfsRGMro9yjoykhVFLpv4gQQDRkLMmV6KgVoPFWzNj5tL9Tvo7ExzQMNp44",
  "key8": "3fQ3XUPa67X5jeXXYX1zGnDgLbq7U15SyRuL3JYMrL9F99a5XJDQ1tNhTcDsqPMebpgW5VMrV7An137SV2azfzcz",
  "key9": "4Z5e4XQbApa8peZSFVdYdhmA5ALWzP2Mb2W5caYDdvHjYrn26rKJdRMUnmBFbcVJTqSCNFRDsPM4cun3vCckoQYi",
  "key10": "3j8yqYw9p73kxN1BLm8cZtLdvwBuhSuVNCvWx8FKtJGqsNR9YEoqKh72f5eh46frgjqENcS6DfnQQ24ZWG1m336S",
  "key11": "2ezfhmLmbjRR5DpNeB6Lt9exkYf5erVfUbcm4HNYEsL4MUXzVHTiUrcz6kXJfZfBbybGt8nyUPTcPQe4A8mTwkiy",
  "key12": "44R5GJy2nzWFvSwuDG1woa98ZEkyWARoeSj5iVsKLLaKezuGeWrPWhPS84bShyLn99jrw1NDtvmMyyj2W1js2ja5",
  "key13": "49fgHvQprgMztszyjF9NNkFhSMTMGact8vcUkcnstZ4hg7Hin7j6DoSdQLvMXUAdhPD8MtyP2NJ4yUkgEXSguG4P",
  "key14": "2x7mEhwEvwWGGzCmyfueHxuoyLdYGzNKkmEFPk3U5PzsEy4pVUJUbV2dv2m4zAfWVbo2hqNNDa2xK8vshwg6x4yP",
  "key15": "Ag9LYiUBitns96xRgsGYyPKYeQDWMhCNarGfHe8SP7VrDWAAmcSfcbkEtLwJKGwYnZg2dugHnKxMWauh3s8ZyRV",
  "key16": "2bEyeqMJD6YekwSnuYNtQBkt2N3hcaXhpXjcdU6AAFt9jEyRgLjmV4UyhzTz5m1tijxxLQ7na9xuPWQyWNuDM6gX",
  "key17": "36TW1Ckptd8V12QYta4gde47JuausTs4y9ZgNjwQJ4WGXmUthxX3bVw5iuLfUCCSYS8HoEox7M3EAMyC5BFkZLbt",
  "key18": "2KckzwG4VcKczkWRSwjFw4zGiYjo2jc9wdrrLALWcrYAfS3CFmU2etHTHAwBybH8iLz6G5nThW92txd6FYNYAPV8",
  "key19": "4Vz2tHScX9tn6am15op7pHh96kA6jX8PsaeQd4NBkd9LTMMb7QtqLxeZmZLcr2yW768ByGK9nbbY4sPsZHj9G8Va",
  "key20": "4vBrznCtyi8RBtpXmsamSPtTtu6e6dbVSSxXLYShkUJjbrRG9vKNuWmRjc1Fvpo5ijTdbqwQ51nUomkzc4eTWrhz",
  "key21": "3UN1oEwdBHQmYoxcKiBBUT6uhHmzqVvFzugaRkgv9UhMR6HnHGyRFBKs339PJa5wmQRAQcNGgYeLRevqdgDE1Tej",
  "key22": "rT7XDPoTg3DhZghatTEQSKLFeruSHHKx39BynTVcgmfDKFKbPzMdUfBABpZF5YXsBZ9HhhdMbArDRqaQomueeSM",
  "key23": "3dUzSG67jntPurZ2fkrtKPqLh19KzW6cHYNFz25cZDhVPtTgBCm2qvdun9LDwSeP18Dn4QVU9hhkiUZXhuxaY6dx",
  "key24": "4WEGJphjsdnkezEAS77cmyLjVNPDcM8AAuo8CEaAyF83AwdBjdHqnY5d9eo7EDL3LyXBNKCU9EePPRVMspdwHoJb",
  "key25": "5KBEA2dTaCuu8Kh9q6M9boTsqyktLnfmAsh2qJhzsXKpXKu339KyHf5RTWfruT6xyQYoAr3MVhjgcZkhReQpKxTP"
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
