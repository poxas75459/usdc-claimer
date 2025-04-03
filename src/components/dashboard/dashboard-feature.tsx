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
    "5CoeRq1cScsEZKgUr7PKdgk1ZCa5qybVNG1KfhMZyWp8E1ZZxeXWe77qcxcQrpkkr5VJ6tuxS7GqVLMUV4ioi9yA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jfLChespJuP8rWEC5SefXMz1DGx8N9orUN8FgKQrYd1r9GA8oUT6M9vWYtvy37GQMXbeQQCoMq26qa4ACcxsUAJ",
  "key1": "24ggtg4L82swo2nyxNjD41NtVMfY7piv8iZP5Vah3TNfWYGx2CXaazRcuHsVojmogeRJYCfEZ1VG2tdd9Ajmbwtn",
  "key2": "2Hngjp7BGYEhErmfAYYauZHKFroF3X7v4s6CG9XKXpTDSGwGrPVFag1nJxKqkdgtUqKTquaMTyAcb6KadKHxBLe",
  "key3": "4KEfXuRyhrcpnK6hd4He4BHJ4uEjheBxLjzUE1FrkHZXziUnHbwZ532YLPhK7afHhaS3cRE3EYBidspGeGMnEAPp",
  "key4": "4EVMzNFdeMF9sMonf7XXdBDH6qG5HL7mFxNEXUcPNeJ6tTpZv3U5JJbzAtvsMMnVKfbL3QBoiCgHiKeXQj4YgeQW",
  "key5": "3TYjMwAyzZGr3w2UdJjUshA3VSAABjZ9CVNHiybq8d85gq61scRoK8zggffy1CWkei6hyvSKYUyF1eJJnkSy5ZBq",
  "key6": "3fFT3TU1xBKaxAt7sqP4nJ4WzzQrLvfo6XdtG5KFUqkzxi1qqdhB6zpUTUemBjmUzfPBwP3nQcMSfETpxRd7BGfz",
  "key7": "7kEVU9GEzHKWsp4jvfGQxzEt2aa4JvV8iBJ74Wcfr3foNmazyv8ertMNhxKNTF6CUYnYeav5HKEuB4oDTnmQtaK",
  "key8": "3GajHSh37NXbYY6YsKMuUJCmhL2hsUEgFoHwc8pDST2HaokCpWrMtHaaEDpmcSGaBcy3JmZ9mdnt1SoqiGh5ApBX",
  "key9": "5CFYyrqCY9TMev4xuE85JXCuboZCauMY3JxiVx2WUCNsuwLMHcVj6xdDwTvoCwzepJPNKxZiQjLiotFbigCoNXn5",
  "key10": "2VyQphdcZzXH1jmHVRvc5aQRn5ymSQ9wCZGkW7E5DcUuVNLcRLMWeBRSHhcmVnnBQ7zMH9uLg4YpPU5fDg798tF2",
  "key11": "2JR1vm66LhP3MRrMabADMzibwFzmtGhpeLc3kdd7geu6mmQSE3yq2eaBd8J7doQE3UHaVMyDRZb3MHE8srd4Nxm9",
  "key12": "2kV5M6e7MoActcMusbWWtRCEDY44jPxiesRrq8YtWXGcxmVmvPEVHEEPFyiLHZsLRDrbAAwpkgdGxtgX2pnf5Yig",
  "key13": "2vSDEvJCtmZjy3HPdpFBswobPP4sdsmvjykSSrR23TJGkAdZqcJFZjM48hDP9dyMTzk55nG7zctab8ut3q4zSo3u",
  "key14": "43nR9PY9BFV7Rg6bwx9C1chF6eG11LGropGM7z6PxCVwddGLTfSbDjuyLKyD7t56M8Us5bLqni6Qw9noZd499RoD",
  "key15": "3vtDDYejU58kHxp2wdHeEtDoCWsYCWpeE2rCoK6Bnpuz4KdcNxsNtUAFRdm8J12qMhcdW6Y4HPUYuiJq1Be2vSAa",
  "key16": "58PxC778WvaXPLV1UDQdDqw5tvoJFZn68yyDhKKWrU8KDL8iqbp92MzkBgHWt27nU9YYkCQhAxpXeQoicgEZsWCt",
  "key17": "2vETfLeN4WY2oKycSjXTZYb2uZeSYYz4n1iveiPBdg4e1MGyW6TbZD7wnCEDSbrTMAoFmNFGPS7AoVdqUopdbbbj",
  "key18": "2WhtXrKuhRJhfikM1AGm7bzMJFDDmkWGWNeGMF5NJfhvrJUFviPLUM83kmomLpg2AxuMEvkB4uNuFYodr5dV6Juc",
  "key19": "4NwNGtLhTP8ACczZdR8AKtmXCJ9fRi2iGFZXNvYRDVNgESwkVsLduKRzh5okJPGVKL2Va9hNDDbQiJNxzQkTZGZL",
  "key20": "4Ksi8zVEGLZugwWYZRT1CYLsvyaUuWXFCsyzyhkuerhZwwhYTLJXnYiDb42ZNUPUKM4gHQ5yKZnG7VhKTzcJcvC8",
  "key21": "w1HpR4pKUiU9YausYddEfjYFZUXQHc6kPqDw4rsTnG9dN2oouo3taR6cPtWmpPfPj1S9YHFNc4uqoakJEFUwoCz",
  "key22": "3ttf8NM2Rb9GonRhee3rH5fMQ4uQnxCLTyQjkoaFZcuSAwN2TeAopaCJrTp9p1ouTGA4Vf19wHxHsFsgMRa7f1fT",
  "key23": "2EtEoR2BWoq9baABsxCzp9rbFaYgsetAUmY8jVuBhidGjtPuuBXgNNBmQfgHNbLUeVhturxcwKnLymkvcz3Uvqm9",
  "key24": "67Ms2yLE45ZTKfSvkvpDHsMgKmdTb21HuE95ZPq9tBteVVATiAvKwbdWsYGkJSgnvsVr9YLA9aVVNKwbat57cZqb",
  "key25": "gKAjDZJDb4nUiRQSgp8DSYcQh2VM1aSthARkVcCzkLaBKhhkQvaxDLgwX9SuyupbLMChHepTHsg22z6GgVsjwMk",
  "key26": "61BiwDhjmXBjLsoNEbdWTarsKFMhNx9yb99HY7FzrPHEnHx3Ucrbj3NhBabB1WfXqqZq5sgZhkYvgrPCTAiKB9uu",
  "key27": "2cZ5p3EEMcuyPmBNotzrkfWWYukQK6b5ULdTzqQ1xFKHGyrQ7PaNLx1EM2zvJ1ahhczPk38MF9tLxx4VyYbQE3qf"
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
