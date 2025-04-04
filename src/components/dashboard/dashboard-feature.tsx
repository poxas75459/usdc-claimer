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
    "5BBQqwCPCLxbUPeSW5PZpnqb6hCG9v9Cq9ZTHf2TfaX77hLg8LWK1LAtBntbKH63oQxiWbwT6fqRqnnsUvjzRU1P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p7gsnauzQ3RbXKhDoKBxDPemT7fYEcJtnv67o7AdNcPuYQWMdDF9R64xEYxtRCgrnMk5pWKxWtVL7xj7bCJb623",
  "key1": "4eNwSBU5TX7ADLRfBAxUPtTx97Q6s6GJ6MDWJuxgBJqNXqDHp1wYTD3bFmVehJZdJUNVKnZpPzygHYzddsXqTH54",
  "key2": "3mVZStfkntT5zeeEzgL94gbmyiR77DehQuhXUQLvWkzBSVnEhmXsBLvBTyNprh7SgFXiDh4csxpeEVRv3qY5ow2u",
  "key3": "5ywAfEHHQfBxdURUtTzro2NMFozV5TXHqyL7TRKodUH59igu2nXeNkBftPZeVWLMvWNrxyoVqZeUDiLXYF5oti21",
  "key4": "3mkWF696CsKquFYfrTXP8fUTQS8Vd55rKsDVMpGiAoRTPfBexSYqM4ZiAqtFx45dKa8Z79rkj6X3KX4ZGPgmGMS1",
  "key5": "5tNjSap3M9uJ8QDHENakS3Dxj4XZ3GztTfcYidYULc6VmbSjnV6pAQfaZpG5KbznRtnhkL7Xnc2NzMY28mnTp8H7",
  "key6": "Zz7xmUuByxmVuWU7KkoP6vgCnBMVYLsXqyGmScA3v3thJmorByr71EMTw1SBsWPwh8MHYCDGYUkuDyroa852Rva",
  "key7": "4TNooTWS9M3EA8m3193zg5CHs1sATHsaSDFEgGP25WtNAMJLdB3kKWhdzurZJiyYMtvZog7mCJtM8S6pjCcj1qVT",
  "key8": "4nohL7iPRp53JEkmq1q4Snda7mGMRupY1v9cMH4H7NWwZCquZ2jWzapuZtkGQrqArypzh9U35cavUpwKHB1VsrLv",
  "key9": "65iQ7WtttuFE8cbXE4SicV55ejwHYAPXAmG48vnKPUeSFsViBP5Hdk8vRAc2tpHYXYyFdX2nSUzvpoDQDiEyFbe3",
  "key10": "3bgnzNUJGrhCSmD16ZY7giGUR83eFF8iQyCAD3FhusEA2DyHnV3LzgwDz7XKoLm6EGqyMTkzWyKxxRsaJZtJQCBv",
  "key11": "58N529H882hy49K6SAAvsp2MKixyFq8JUZ9yAEuonDiic2H6o6NEdgZjD9Tu697Ao7Xm9fokGjKEQXEDJTByQy8p",
  "key12": "3WEbBD9BgkBVRcDxogmy1RtdMLYmidQQPQpj42eRStm6qoj1GHwGA3Nr1ZVKFSwgSu5CKTdcLh5h1EXeGZUgCNgU",
  "key13": "3BayH5RYgEG7pEKtbNjbPa2hKhmAdr4qJQscWKsxRdqLJTcar43Sqs7tTHcLHLaLjcwai1LryywNaPp9SBz49Zmb",
  "key14": "3BUXZXoJdY4ua1CbhfdTjL3Fqfj9Pbx4p7ws5EMnqGXnqYm4zS9nEGouh8tkvcz7sNWuKEWKPEKKSLSSLewT1gc6",
  "key15": "YYvhipawqp9BJtszARcSJrBDY7DyUi8PfnSvGFUWtR8X6xHwexLbEzMgQ5i8AjNyrM4b5jSm7MBXwe5i5mUMiUw",
  "key16": "n4qBc35bDJKJjJVSmUPTbBYSKn5n6Ej3nbmJ9AiirQXUFAbXdJa6h7jdM7vpL6D3pFaXPZDfN4idmNeksuQ39Sw",
  "key17": "2xrngS6LqbcvtVSaX7r54mTX6XgLxvHm3ipBdhfZUSmJRE8m3Tz3mYbAbFuyqinH2GwUKS5XDY8n943cFd1KMk9k",
  "key18": "28z2z5ugCKeha9J7L7EdF5k69d1dfvL117GgUvmKcvEy3WkcJmByozksBgiepqaQ41X6Wxoa8tHoYyUmFgTkTVGr",
  "key19": "2eAqZmqrtyzecy4P2CWh9Zb9gvQuiLPjuRaXNkb9fnfjjSBHbdyBAR9T82DSjDehP9NPZvxYNVk5fVg1o4WZKYXG",
  "key20": "2e8ybsTDkSmk39h5KLD6BDUmhaia1A2N6DZgUFfiX3hrCqE8vSt7ZPdB1nejiW6siBYvWv29gYs8yJdQLhRS7rNN",
  "key21": "qvSQ7bteiULX7if5vgRwtgMmmQwYaCveWR2GqFQg98FmZKCoHkVFGPhW529bEDxFTZERqhvWSj1mc9SZgpDhDKp",
  "key22": "vJeJpjeUHFgmByZP8jABWYVRRc4emU9LGyzqac9LJTUfPk6Dg7bmdNbUvmjM7kTYSi3vXkJ4pVoamjt9nTQVjvn",
  "key23": "toZRAh7rdmDgi3Rg7Ys2YNavvoCH2iG1FZJZeVaMsxBjjaueaK2ERuzX7gBbxLCqq2ww1ThYSetekKiMyR2Y8oC",
  "key24": "4937dJtxEhwBwhzqDrioAEFrGpwEmaAYWJidZGZQnxqA1qFYMiApEjjAd45cZwyyPfczcDgCaxwPkuKJJD2wtYjN",
  "key25": "49kAm8Fy9iRRKXriBXteQYVenpMgemmb53DAm38MFXtkqQNgWgsGXx2G1pUacnrWMMfDKe9mDsaTPejtH61gTZs",
  "key26": "3qsCu8bA27xyJ8iN4mvQp1DKsK3YP79qrP7GpYdfNFYhoV1s35XPkYW4ef3ZMDiV2wRSb9D2SLJMXJEbszSmzkrK",
  "key27": "2Xobir4aE7mBc94GWoLNtHj21G73J4M4Gf1Wg1gNj9AUoeWUWBT2jnR87BxyrBuzLooJcTEuZ72rLawhxJZcnTkz",
  "key28": "X77tmzpco5qioQehZA1QMymrpZV8LXHdw7qsSkeVAraZpn8TTs8m6xantx5qwQP7TRNZ84XXvyLFFXbybFCbr4z"
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
