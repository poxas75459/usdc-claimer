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
    "Viq6PjBk7mkigpEWSDdTjU2TPdmKMeog3aH7RUJUY8FRjavwCSSyHYyWrutDQF3E4wf4MGF8ScZpZM6GswXjKvZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iXG5FWo8BcsiLxLDzKnttd32fBreH7BFwXcVqU3DmxJschF8rsbyQS15bdGEsu93DAbPCJAUbE84gyayXnxvwxd",
  "key1": "58ARWiWa2wdTEs1ZDjYzny7R1LPNsWiB1XRcw17eLLKKYaTzPZExBL6XogJJKhE2exqg9epRNMBKUH1HAp75GEyo",
  "key2": "5T6PsZHGkgYV7chPvg3YLptrBLg9hbYr8BSV4R8tK28qQTvh6jCq4Gs4VdiQC26MPtuaatLyD5RHrXXtGkonQy2a",
  "key3": "2Ym5qEkyjPvvTLx1v94VQiviAyj4wLs7BFe18QTo9mPMqk58SERpQG1CsHzB3nkJspjGzBf4YbEPXVxoUEnxTEAH",
  "key4": "3b3QJ283o6ZsxmEWB7uhtyVUN5gUUMhhT91jpmUkEzQdHsBBm1NtnApPdzEwj2j3qv77t3aaMrvYPTdroNy47BYK",
  "key5": "QSZG8xquzaudafndLioVQvXrSPBvgdMh6rt8dQeWTjD8j316sSyXABjbnVkHvjzo2J1G9Zv52QDXpTpppxFnmrb",
  "key6": "im7kfxRuZ8GBQ5imZ1qcQxwYqZz1YiB24iZEwYZVoWhYDdaCS6i9jSrUy2LbqEtDYU9S5BE93J72728J7HbNdu9",
  "key7": "58gqFqZHpUiM5Xn76mEQr7DuziEFw7GK7s3yGUXTLtyVSvad7Furhc4LCsyJzhDRGNJES2V1FEo6rcKWFke861YL",
  "key8": "24g9QucZQ2wGKcsZWWv7tFBuLK9BgyMmqT68XegJbQiKvksyqzkaDsEd3zd5Vk9WhGmwjYUT5rS3svG6s4BjTZUD",
  "key9": "3nz6xgeTbnCyBxZf6uQkrub2oFzTpWZhdg7LpxVo2VwRXMwUivy3F2NRwtUUbgipF52ypSnxDDSFNB9kCeeP5BBP",
  "key10": "2qNiyE3pyLya2q17qKRswZeXGPYfXkszxWgrH3SEFU4eWUmZCqmTh1hw7ycdLodC1e79qdnF8cnEANEz1z5YF4j4",
  "key11": "63sZnj2iFixrxnNXeTgiHaa8idZV67hdoENJkcrMVTbtgKJTsV35M3X5eCdX7rKwqo9QaCmPmgp7QcUbNq9sZv8d",
  "key12": "2zt3MCBHVGFGJRD2Adye1vykzgGHDaN7cxAN3DpwrF8q3txE5iCeH25bC2kc3EXmFDjLuxS7XsDHMV6PCCpJxMYF",
  "key13": "pDeSJPyocKaZ8JBQoYQ9WrBPnet9YKLJAzuzR2qam1XfG5FC9ALvZYHsdczs4Zc1pgymRz84YYQkZKamcAysyiZ",
  "key14": "5wxxX2WxDRLHMK4bxHaN5zeK4g5Tcu1Ngy8AHSVxmbpB7Qo8yahdr2CWWwKztujw7bLxe5wR9CaZT3UWWGY8ymZz",
  "key15": "27pwpiRBePVeDEWzmWfuR75G7k96xdnPz2DedTmiqj9gJTDr76DHg7r3jBsaQA13zX2KfFPDxxJtk1chNCZAN1Z1",
  "key16": "PyUqW6Wu6kskmPbfuv26SQRgpoNNtt5JkmkkEihZpPHwVLP2nDYVv9aQr4gQJhP2JxVQvU8qA2U5Anvt4tuJBVg",
  "key17": "4wWE8MEusXuK5G2P6tx2iqz2R2k2S4AkQkcbt7vGKNLdidC9UYBcAfEbrMjsuP7yjP5Pb9gFRscp6vo64qGHBYg5",
  "key18": "21BgmCgbZcpBBNu7stf3tsRVcyL3Sa5z4UJaBn8U8iuh6AgA2gx1ceR9EEUJaVgBVAnMEK11r9FosP9sBoixrWeX",
  "key19": "4n6uJcP6RTSjrfEzR8NhQxJCPJQSN5xqoUc66DMVg7DxcpcVw2r8Q7mHYRhaxPi5YWTPJge5WeE7QTm3dUwwn1nD",
  "key20": "Ydv2ZLjzpr34LMP8f5bDaKjSfrKxJoFEZe74WnmSYJ4N5kJFtGHwu68uC1unM8hgn2Pd7ooXXcsRo8H9ru4Gz8H",
  "key21": "2ogDVqUJAzVSGphLSXesESdFCtuSGgz6siJaqkCXv1xidYforFuKXvexzK8PD5pwZHXGPz1Hr2ofv7wqsGZ3nLnH",
  "key22": "4YjtEJxjsf49YKqxA35EFAsfM4EPWETH4uaygsyDeJXAnFdAoKeN1NUuZGBYUhhkSbV1SgKUthX3vzqL6zCkR2Nd",
  "key23": "2T9j86R7yb9qyqALTrsJqjk4rSESwSppmqexRW6F67xZPjmY5Fsu4PvpHk1bsRpXNPaPiFZGyf3kEd6dnCuEgGGn",
  "key24": "4iQf3NUmRJrBGeNDCB1u6p415PFiyUstjBXSk3Uuyh2jXKdi3mDgVm8ri7BMUuWZV3YrFiJZmNpYcXEfiMsYJEDY",
  "key25": "256fdvCPogj6GXfuyekHVvpGWtESaow9p4VFR6ujBsznLM5DgM4YAWp8WYxNTKXxiwRbxLqwJaPau2VEeoD1ExNh",
  "key26": "3oLvacfVCjnHR1ySrc2gH2fd2PE3K7gTHtfPpsbebLGhr4X3HNCF3kja7uBiRuTENBKDkSXsoUPBpoxhMujdost9",
  "key27": "2YWcbhPK6AkpP81NsuEgbhk96y9XrhmbDygrB7vZGdh1ENKMa3vi1PzZnXFeZ9HGUg5SPLF1YyVAhmExbVGDCes2",
  "key28": "48dvNqtbtyw8n2DHM4HL1WJxtXQpnC8EkU6poLFG9svcyaYjPMRHRAqrDSWKKuXN6s6L5xhh8SkjtKApAWCuwQ62",
  "key29": "5TM9vhSsmQw5R8dBJYvVD25tzAjAezoP3eyJytXd5kxKZFmMEdgD83YBujAxyhwb8T9DQ1kLedKRuDdsrfuWzdeu",
  "key30": "5T7KhXY7RobdZ6Smgs7bPKVPcnLLYvsBy5CSLSEUmNPFvywbYK8j4Gz8uKF2uTaiwEtcKvDEP2CzJGTfVpJjTErb",
  "key31": "5HphTP7vXttFc5Dd2toqK24DzNUW91MsfZRRi1paoahtBrLTHcQKqusoihUyu8wgnuq7J9bKXshNCACX9NFWTD3C",
  "key32": "5UFfTfsAmW3Zj89BVUQmdWESQDAZPzwMMdvk4LsBeaBAXNXBY7tkL9kmA5P8HZBxfjX3LFWiZXfcDvdDTrdWYAkn",
  "key33": "5YVbbMskE487XC47PkJbSB4EqdzFoptDwm9Gpo32BCnJGBhZHWcMDuD5sr9YCTG4uPmpxhryJ78Z2RxFYky8GyTf",
  "key34": "5mDzNpt6Gp3uDv67DCZufUYPnF26v7CqC4cNf3koRCzjrXy3qyoshkfJyF3bsmdFMMx1WHR58rj4muApCCS3dnSX"
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
