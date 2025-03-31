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
    "4MKyjL55pjsUSNYdwStwfbkoqy4iuESfQfk5Rpsw74Axh58frE1ECCnRkHZikoWLwcaHuM3uNWzQ69VEj8G5pyHX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VQPRvESwE3ZK1H3ji3vHBe1vgJMZvjYfsoNufRVPJK4bNPwVrGcX9nXujYr32py1Nu74LyseXtUy7oHdravNibK",
  "key1": "3iqbTHEjkD1npcR8VUES2jgJcu6KYqeB6Ya1nGDMBg1fndfEfGPnS2LHbovUFRFLKETBZmssxDeEBdTVHZ3jujPG",
  "key2": "4yeebSbe8iX8ek8N1EuWN7b4iqKWDTjofu67XYmentXUNgPma9ytcS7rgg8R41P3VSR8SURwBgigmEJ6kgJ5VEQB",
  "key3": "2CeZbKniGe9MavnbJxm8x4ucG8b24rGGF9GESXMSTvktuTCok2KCyQQpwu5HuHYvJuQuHmD5MeE4TQDRDoX3QYiE",
  "key4": "4eR1VU393NRddiKPu4pX1a4x25r3dc3beMvxqufKSKnQtPeiw2qSCgkTW4otU4RL5pC4yeRHuRQddwJBUJnt7QMj",
  "key5": "2ZnWC1UkYFpkdk7QE7yCW3cYjzbgsWMsNkG6S6M7DpsZopugyiCqXDqAp64UeuFWVUEgLrg8ApciBFrwogNeBUX3",
  "key6": "54phyAbGnZy6yd5FRDcx2CuwfrLKuRUvWyCT3gbjnYvbT3StMAJ3wZCikKfUGxMJFs2jxUVCHTq4tRgpw6P73BmE",
  "key7": "RXhh5xu2bN5qJeDauLSMVMJMSgZPuEskXbqYhVQkJoQgWxCLkB8sY5C4JAXcVqQyV7WpALP1FCz21KUEvVkfabb",
  "key8": "2xnSXAHRJUaE43gPBraZjTtKjg5vWjQPeVk1or8ejJfUuEjh75rCT5gr7EvzynRAdQFoaYnMuKXgBKCxTsqhjaC4",
  "key9": "2Rnr7hkvbFbeiUCiro1TJK3cmAHT2fXRjzSaktve9Ha4mt4VkVur6qmCdRQWC5ghHWhW3iBvLPtfTDZcwiZSKpPq",
  "key10": "4C2A6euFkSWp1z8ebXgUXSFLK694hoESuNPFe7WHxdZ2rU8vNpH4LcqED1ipajYUFpEuv3YqVoDgvRXqyqFQ8u7m",
  "key11": "5sMbxkbLbeQn33iUwAMja3vpjGsBLyV4oi7nFQYWS3NMLiNAMxP4awS9x8ek5k9syBPWJJtxBjRJgid83oQPQB1G",
  "key12": "mKTP2ydAZNExL3LkD8VV1uZz7eoydo9hBdxHmxZzAs6RMFY8wyAnXZ14QUsGUWy8dxtzuXPkpDSmsp8q8Qu2cFH",
  "key13": "3X5kLsUT8fez18tnsU86Qz9VdW54GWrCTygyffryBfHL6TNPgTQRPPm2TtW6geKDimDkLVr9vc3NHgSB91LNycK6",
  "key14": "4fojiy4hXx9vt5rpRkB3mBuKaisxAFYhsohvJHqzV7HJLBAmzarZ45zYN7t671j6iVqwwjxaitxCASvP5KtiZYLy",
  "key15": "4EytFCkZWCAPCw1jCsuedNY9gifae2vHWsvUUCvWzgQRFeRCvjyzg2LTyU9HobNEmMdR7bRZ4gXSzQJwWKg8Mufo",
  "key16": "2sSBS7TxbFkGAgqAbEnsNT9GFCketCH7XvLhoEG7jbmspcHNzdQJbqxTex5e99XRtxBN6ih9h6AvnAwJrSZxymVR",
  "key17": "3EFQXUtXAueqWx4vfgm3UnskxWyDNxTGmq9VQFvJ7YJFzvGkHycZ3ZR7afXxWVqkGyAsECXFqz92how9U4SGGGUV",
  "key18": "2f1cAG2ZHWR2jh1rjQdWDqygbJemM1b5pAmpVp1Zw4QeZhCjqe6DJCAFFzRKjVZCJ8mf7hoLBNU8qmBcooe1w9Sr",
  "key19": "aff6hnETBKDCJxiES35XmXfcWEiYqmV187WKUN4q6KZQthtu7NV8ALaN4SbJAcHYVP8861zW5vZNoX5WxCWUZv5",
  "key20": "4pFa686G4ucE3G94jwCkMdiT3wSW1CrontPtsgJEFkPGF9iLGGN56ePTPHGjcSajD1jeoWpCVNGjriFLPesJ9xna",
  "key21": "kThdskT5bD3iyJLS8jAmZRX9VBKAceaJ8v6X7gCw72AgQGeyupqvUTEpkVv27zbZUNUFxW1iGCaEeWdY8t81DY8",
  "key22": "4z75eA2CDxVuCr3AjJUNzRRDptQ22BnWY4vshxfPjJ1PPPUsgbv6SCahx4M5mEDMjPixC7BbowCAHQ8nEioZjPHj",
  "key23": "ToRmtkj7pT4SKwjaD5v5b9zpxWqHCZhZLiyaC35zeUeLZbPCAvmmJ5YkuydHwCf4fij4kyRH5UrAXZqGw8grJme",
  "key24": "4ejMXZGq4x1hD2z32PEdjSTBAY2apjH4Tsyg4S4etGBiPFTRsCuRv3navjfP9Cj9e8HcvWyq6brKvTRdWLV2PnpY",
  "key25": "5VK9AQthdGqfvwU3kqVyP3iHr13FeG7qKqFzA8m7eQopWS7atZcVMzyGd2cbZAeNM5m2u1o4xfvun1k34EUqFBSb",
  "key26": "2seFWkhTWA6rez57X8A2PM3MnohGDkR6eAbT6oBFghUR4UXknm7BH1jS2tksTauhhkgMfEF3CWHT318GdEM4erd8",
  "key27": "1yqv1DTZ6AogckGEnmUrcSX3ENH42oYfpQqeWRKaFfkXrZQoR84WrE7ShueYgoXggFFBmxWbK9iGs4iM6ndtzxD",
  "key28": "4PfifQ7MwH7K2ZviuN55Uh3MwQzrhBJq99zcr2kUZUiSHCPq41XW6qsp8B9hpLnfKj5ncPmmcihofKpFi6ycwVKz",
  "key29": "2nY8bMfq8HySdLZNTPFsiPyuaF1XPPSi4h3LDU6zuKX9dGC3baXCMYyfr9ji7hLuMtBY72pmGbVmeFxaWbF4B75i",
  "key30": "XDva7TDaik7dk46CeY6hwc3FgiZ8YY5CpiMD7iDpdkejhfA81PHXGuijG1tPpQXH9hxxHJAjr9ps4AVKt7uTUZf",
  "key31": "61Hh1j9xfP635AtkxXaHpQiuH6xMSrxXKmRvxipKNWxLbVReFtHgYaYJuEviWZnzaPWjEm3se35VqkwTYotuKUoF",
  "key32": "4SyvGNKcZbT6N75pG1Z5MEfwcwgoqXfuJst5UubZmJenEEWv3XWqqE8G6ktAdJ6i4MJye6cM1Q6LVVqyueynNYDN",
  "key33": "28ryQMkedw23kwhWwHHBdVa1g87dv8ZfVb8ufVPPMNcqy7WoBnNG9zWMp3PoxPTRAvxuzF4LrXce4ah1RpGwGgBK",
  "key34": "2gJREcVJwuDi4xNQjWoW8NL9VwK4gxr21q1uGo9UfP5TzuFeBJG81f634RydbYACKMst2YjrVUAYZPMutPrgAome",
  "key35": "2LHyBXRqt9JnS9Wia2dCAEjNmefVmn8CFxeVY5nFmCQSqbNadUZTbKjXGnwZj1UvKi7tC9SgPkjwyjfEaXZbbpNy",
  "key36": "3qrLcfNiTyQxmH4vVozfDGZfrzmGNuQLHa3RW1774p3J9WA6PenWS6etujpDruS5BixvgGdxsujsCPk2MNQLzGAc",
  "key37": "BmB1hdS3MsqMPVif3REtMtmaeN7wgBEmAwDxpsef3fgrGxxK9evVtkcfjv1N6FsNPcAGUtjhih2kWQxiyahsmk7",
  "key38": "4XDxK53cyhEv8T8csmgvMThYoHomMo6WDct6uFRKvmGHVQeRNvYXvTyWGQfQkv7C1nm1binFqjjYFHkNfJHXWc9J",
  "key39": "5ANvS9tXPM6Kgq5oPJdHXMEebszMAGxqm6B8ChBy1bfyWk2W2ch934mJZptFuY4e3kEDQgAMyx4ayE5S1eCM9kog"
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
