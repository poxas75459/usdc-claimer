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
    "5Pi6kR8kmca2MJ91Fi2UScju3Ya6JGNMcWh7LczYyTX9BwwVS7UA56RsAriskux8ojEbvQ71XMt3y13Q2yAnMGbd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Gmjc66m9J6SkoLRigQ9ucKabx7sJntavaxQTdujg89DedUt4CK2V1woJ3CMRPVgxgr7LkRJe6WNRhxV6mqQwHT6",
  "key1": "5PdA5wz7SsTaJBDVYrHLjSsJrCLaeXzWMfVkBpDJ2Lvo7SJ9Z2bCykVuesPcV5Sf9MMvd6EWR4HVvqaXofaMfyYY",
  "key2": "5Fth79JLPUazKV4JamCQEoTeynM8aXF5eGSGqytFpo433GqKgjbw94Pwq3xBGsSXW1hw7e9uatm7ZAuphSQsopM8",
  "key3": "4LRvQr3UoyUfNouSovPq385x2B1tjJky5VqoEWjLTn8SWegvHVGJwdCuq7ZFh3VL34kXtEjq1yfdHScXqfv5XfH9",
  "key4": "p6okTAM8XyzDN7wWxS86QSTmH6C36eV3V5hw2Y5Ec4Yqsp78h1THvfdLzCNsnxcbhuUo6d1qWn8Suac25dZSHPe",
  "key5": "3JcpKH77aVQM2nP8VH9ZvRErp6rgGDGQWiSwsy67Bwpq4FSg1XUkV3UJeJpN6BEuBXaXbg7fUJopZQrK7yDVKUKY",
  "key6": "26fVCJ7ncjxRzCMgA3ANKCNZd3SREgotgttXX6APUKWHFZpZDXgTCNukxemczE4jv1BU7VePW7aFE6QeBZUXSqts",
  "key7": "26NARfXsSjb2ax6RZrf5hPrKvMzwbKsTxKFnBf375Pj3FTdUVx2R8koPxopqEM56ghRXNq4neWePBFES3J7WCMC7",
  "key8": "47Uvexgztx1zH415b1ZFV58RLrU2itsrcwtfDP9niXrwNVwhMKnYrMLZpjMjZ8iLBZzRcb4pjWEEVT5GmWn3FAhG",
  "key9": "5xHxi57aof8XRL1Qkzfuceo6i9eHsgHhYhorB6WXfdX5EQhzhfDZLg9mnr5FXEwMXHT6a296G3m8E5cWMysR8aXz",
  "key10": "4NVvBoGFf4xDAi3EbLriRPLAEQucD9pP8ZkeiBDURyHYvK9wASDibQ83sxProQz2FdVE3XwJhYgawzr5fyrZVoyU",
  "key11": "5CZy4E33soTTMs6RPuVLbZs6z9JgABuHHMJx27vS9rUKGEoXtsdTXDReRivNehvM6jAvKNjMLC7NtmQMLU3RcTF8",
  "key12": "52hGXpZMT36SH61bG3pWmoaZbZhkqPWMeCCFHTRoqwfPGiEUn6b65Gu8TZ7WLyr5sYXh4Xex14VDcnr7kqC4AkyT",
  "key13": "Ucm4a3AHvLGKy3q4spzGPbVKpj4hgZPkvYXGhpv2siqU7RsA1ApxxUCrzq1gTX4sf1ez9mwysWH2PcPLJLvwSXG",
  "key14": "WCUVd8xm7VkkfSqrQm4QkMubcjci3rivboranq397DKjzCNraM9jqzKab4qD3CvrwB9PG3e5rCvKDQ8mvdphusT",
  "key15": "3RCABMyvb51o2Dk7USWzeeVNFPburg4CXFtfgeMXYhuxKRv8K7hrv7jpkTLEFLCavjNYFK7yyZCCJEjnZqvqUXpG",
  "key16": "2jG9aQtTP7k8mqsjKrMnt5AbzcStaHMnkkdTpPUYZPUrfxWP5dv1CmAmccffjQmXzsyznjnTgzs2p6XFGmmUk5y2",
  "key17": "22v92Wi1sYokohXToPfHnaqtWMaNgAkcAD8X3SjLm1RVF6regqo86twcCNQrsnPJa5waKnWdj8hcfrwhApS1exzE",
  "key18": "2KtqDGd5z3fDPsAoGTJpGMyBDYdUJ5mG9eZczbCrdhFk9SKSeUXin3dvHZLGcagu4f3Zi11F1QVNFJK7mxCrccf",
  "key19": "2Va7ut6BTi7kksCkhfQiJZEZZY12zwkuaqK2No6mfCmWe9eMhTrdBbusM9KPMoUg1cu6HSdXA4PAjTaUiFioggoY",
  "key20": "gYimJi3jxv9E13sxZ9z9QKviM1sfJxnjqMzf3EAMH6yh1byTmuccKVLs3x1yCacNAew59ZHKVpZPoZVZBLjRqR9",
  "key21": "3F21aJPoiy1KPZ7z7X46dNPTqo5Ds7btvPnjPEU45xZ1pWyMUFsY1usKfstupBH5CP4Ga8VE2ypiR6DabPHvQm3A",
  "key22": "2jci9LhAbWbAHoy54WXRmZnsmFfN3ho2StarJ5QCStr1RxjxT5rpnztaa9cys2k728bxW6AZduqv15UBFJ5YHTBh",
  "key23": "5LVtfRu2x8VpeSjgp145SZEeogmwxG2LfqSm5WhjsUovd6tpQRLPx8dFMdGVWXVh19GdRXDyMzh6zbeYizmFX6ja",
  "key24": "3iLKP3DbnC5ynoW3csEHz1VCJpu2eLCQGk192GbeKiHEboCCSSX9LWodKPAfNTRA4GEHgJ5Qqb5wcdZzC7zCjHgL",
  "key25": "5t1ybnT53JYHCGwoT74wKeR6EaE1vpKsGWLGsdd2bUDggVVphUuDHXjLjU6ZAR1UvxMyFNo6wuD8Ff7ph3Mzkd9c",
  "key26": "4sLn3mhbkeKmRKAytN3H4AzRWUUgvdwB7vtGxd8C4sSqxa4YzoPFqPHB4ovwKa4XpoA7wR5obERJcsvgadDQw1Am",
  "key27": "1iue1KM42dQjikpcVvzLNRP6DCJNZJXNUhFVEjKZ3BpkHbjm3oSh7Sf2yDWzJhBUiDm2QiFqVvMPpyQzKJfJQHK",
  "key28": "4NYKU9cLkav7Cgq3bUH3R5QQ5wRzejpjNoPZSLwttWC683EwyG55WTEdHFdjpsUdmca7W9zScSjpiUW9m2Ke1gTa",
  "key29": "5q4mGaKkUzzwHp6Wq93EWCksTZMfNgLeXBmvhiSzAdnVeoEfSyqkFaCtD1u3w6unW9DbJuu3xWSpDC7TgRXnGVCC",
  "key30": "5nVGTxkiFYV9sKUXSqFG4iptLpVJvaykrt8Digb1x3LP57Z5D8pW1gdfG4Fa6YqJqonLW3uHZAwpy4mYmNX27Lnw",
  "key31": "5nmPbxFSto6DHRo32dmCU4FsH3e8Ay7Zb9fRze3UaEmdk3Ky2iXjS2skyzkZDqxxkBcCL5W2Ew65Bi8p4wwwdnQR",
  "key32": "4VYrKhtMAwxKenpJDv9fpEsjuoXU54t4W8pgQK98mc41JbSxTLL1uF6mJ7CXXAWCfGntizTgCRNPQNT5PoF9RtXn",
  "key33": "5i2h5PCDygtC6MzpLzLsLxKbWzcKXDuMy7C9jYYJqYadZokMNjrBMFecKiwQbBU3KpuyGN18hR36FzL38iSADsMo",
  "key34": "5t36fNajHrQzqvBmtNjbHtmLd3S1GeCXRdEXyS9enAbWyd6ZpaDVL3pnsbjD7EbAGKykExYdU5yiqM1euUPXJJWn",
  "key35": "2cCmP5saHGPxQSG2CFifn6rdD5GhRvSHaKe96xot3HCm9F8Xvwvb385hWVWQDiNRuUcxWrDPbvrUNc4rjKoBecHA",
  "key36": "4g4a7hqsPH4KERk6KdXaMGDXckYKMoVwtwDLcoeYRw58Ae6vntsN4x7bmw8VhFFiPDwcStMKkcCm2tUwzZ1Ab6Pr",
  "key37": "2fXQquAY6c2DwwojEDbKmCeNiV8aeLgqcwXHeqJXfZeGotTPUcgqKAudgeZnKUCHvAEYMQF4DsYdzFn86kPSFsDE",
  "key38": "3s2nXo4yYQpCvxNBiaDmPwDkFJF6vzU1BPxWjD284ZLo7DAz9zX2KM1yru2PVkfuW4D2GDUuAkqkcZeTMv7JH93",
  "key39": "4BbBAZudhR6EN8dehPTcrYvLC8vmLvxHmZ2LLvdUcNvhSpQBTVSGZwiMGoGLFCocfUnD56aeTDq4MYm34eCqTPfR",
  "key40": "5NtqK8NWGtsfAhqTWEkUPGp6Se46XnnoW7xmuhzJ5DnHPi1pCf9thErsJ8LPe8qaGCJ7WT4kfM5wLcovpLdnRc2F",
  "key41": "54doTj8NdKydih7VRuBeUxN37jL78HJM9CM6rbM58HZLv3jm8RXwUcaAepzjGDZ7F7VR8FkYLLPjZfJgjZUvCxM",
  "key42": "Dz4xfBhaT1GP2BB1SSKRSip4WfUmcufgUqRseQRt8vTotzgqgMk8bRGJq6dY9YpqoBJG7dH1urTLYAyj1HPsYQY",
  "key43": "5fX4NmW2tvvXg2vQosMQo7tueWauxk8XQMKide4XHuJTy3mU7YpaRXFiZFFteiaheNrnmcWVkFmA1Y8shqo9APTo"
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
