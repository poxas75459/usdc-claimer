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
    "3m1eBJbFWnbFxbMjLcc3XALGpm31DDUw7DYyC1QzwuM73VCkYswQQzLXG8tQG9m79TC62nD2GAYWR59XFb36zR4C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B647avsfEheRUjNSrQuUb9YwMGBaoFDFDqq3ABhPVxxkuwmcqLBfNyhV7Mo9RrbSc7Ztb7yZVVP5MC7J8zP2hWr",
  "key1": "LbifiBjpdCzwTGQDyvu2SH7jqKbcXkXXGAiAQBmkxkRUgnC4LDzkj5VJRkJD9pWFowggxNbPDbFZ16mVFreDgQD",
  "key2": "2q1Vu1ue1hf9dJxJwq96jx74wDgFp389QxGZ5aaDLFpDa66DA1cqL6r8jytccAAcaju9v5cEVgKDiqkRUVhr2PBG",
  "key3": "39x1gs3eNJaeKXRydEyVJmV7PAnFL5xXiKQ4ndGSbCNu72vrnAJNQ4ZxpZ5YgHE2iLrF7wwvDiM4WHftqEYu5erM",
  "key4": "4VkVDj3wesRcszKHbvDfznUrVJN6QJDomjC6eCBMNHAUwKzMYkMQXibgTh3JhQtzs7f3uaoCkJ3v3ohVbp4eCCvd",
  "key5": "4oxJAmNoiotbQtHmxF8DbYpLdmpD1vDXj9LinGyKLEtCVCWhqQ4ByFLfF9prqZTtd4Jbh4De29pXE8gFDtToc1Nc",
  "key6": "FAJagx8mxG7bNh8DoWtmuWUmdfMjgZJ55vzoZi7d2w3K5JVwCYoiRTY2Q2XHHL9tDwxLd9v82XRAPSEFqbdM2P3",
  "key7": "DaocibNPJeZ8XkNGbdEkuDWdGnycdNpRVvuSUNKgBCTVpr3gJbKL4dfCzHbvm4aguU2fFrgsMkKtPnLP2tD1kve",
  "key8": "2uSh69kTAk9o6JxmmDAf8VHmUTKr92DLDKxvVdC1E5L9DQwt1dNNk6mBVanK2zw442TkboC95aAPz9WRFea694hL",
  "key9": "5zq7tiuqFsjSJpda4hHEw7EuRnHbqcKXkHi5VV63giaa8rAyUhRrHVmNXnguCEvr9FHaj9T7bNaHQyHXwj7HFfGE",
  "key10": "5piMdyf7v6Jv7BjZ6khQwtb1RvjnRjgYJfktoFALpdS8HbcVBSE2EBqGktUWGPhfjq8pZiEPVTDW2qJZfcavvrXx",
  "key11": "5hAagsJES2tjvtKxjYtJ5oByyAxUb8zw9BU26iynbzTiomn4fahUVjMULPJUFGoeDZWrJntqikc4Z9qUPH81kXrE",
  "key12": "48jcqxwWeTkk2hiK2iad4GCgmbieRry3sm3a3hajdL7VKsdGBXarWvEc7SMAoi6ya8aotDWEipFsRmF1hAqHXLNj",
  "key13": "31pSHMakPx9kpzRn8esgNXJ2t5PGnGS9xDFuk96EvdB5HqGhLKemrihzgXy6eorWSjZZH1iZ7EZ88WrmzNieGwZY",
  "key14": "fUNiaFrNqi6uhKjnaq9TTiuK25kqniYJGcUiPPm2hELfPERtZU2gJDqVqZ9a2vpLsnsiJ8nstjTvRwNbeyDFqi8",
  "key15": "5Ye5J6TFo9dVXnsVKDKWUxzkiw1JQsgcqhGX6wSefcgSCTpixap47dScssLNumKqy8ZuWctAAcDQGKbxH8wsUv4S",
  "key16": "2BSY9XUD96g4b9knxsAVHDsKM5kGwrGDmbYz54K79JJWLpBDD5wn1Jg4kBSVtbYLoAUMFgaX2Jhp9N1SjKGD4bBF",
  "key17": "3ueuqGwhQ1rzWMRpMdLEau6G8scsPvKvurcJRSxKEHLsZvkv2T3MF4wsAN9vYWLPZAwTgSwR94fNEh12ow42wrqS",
  "key18": "57dexisqSau6BTKSe4kTAbsn7Ltf1cFv9MXCLQfyf348jbmZfK1YgyD6Q6GSa2WBVmTPer92V7GZ4aqZ1dcvgwX6",
  "key19": "2PK21yQF9hnvMuiU8vg6hToJFVtcinAd3uvhXLqk1shrkD2Zd7EYPCpMKVG9CoAJCSyEx5THeKDsNdkDNtzi9JHG",
  "key20": "4wEHF1kaSFYMZPYXcpjfKZp2cxuzZtwJbsYixFLY2beDRwdifxEXp9xXLvF38bFEDHtrkHQeyDUxyL9ZC234bZNa",
  "key21": "2zt8oLxwTsPA35x9adodjmZ8ej9YwkgDogU4DBG6mbZxwuXgDYTvwdXVnNSVHsh5ihYzhPQT7TPMRNmLxikkXigZ",
  "key22": "bLt8GCScbnAYGvbxAxc5N9cLhqZUTXxUn3GkEpKAi7F17TqFDiWxYE27usrn3CQ7CkS1VEXwsakRjpkVcyvtQQ7",
  "key23": "2CxcMrNktiFBMqWaz1WLi7P9qkrrU6gb5socQ89tWecZQsAEAnxaAqvSzmBAZi4hJ32iq9iuvw3WSw6XSsvzYNLR",
  "key24": "4NoHvnhxSY8UtmWMYV2yWmgmfHhJk3HY8UGhNWjxbGJqw7wvyZhJ9CB2SB3a512L5rLA1kgKEagCBtHcME5z7wXu",
  "key25": "5YXWb627rmVwyr6mUzcUsTmer5UXQkD28fbxNJjjnjs4B5A6LzWZYA3PhHziXxUH8EaEwcPARJy3LznX9VHwmTcn",
  "key26": "2wMTzd4PbWhifWbSEF2MkqrvQ9nijZhepzRJEotd1zyXGNKrRBrekgQ228M3CB2Dpa6zuSBxwyVn8s1v4YxkxMWs",
  "key27": "28wZXkfSDTD6JRMCJ9MxTtAaAAZkepaUPexx3461v1kxgwx89ui3SgNR2uLe1Aqq5JDn5eZbxSGvmV129ipSQ6Un",
  "key28": "3GSDq4FcdHKgXUod8k1Nh7ZBudhKeX1Z5LcXb3dCkDji8ZHc8CbJVMURi6Gm7DfKnnEEojL25AKTvjT4PsyuXWpJ",
  "key29": "2AN5QnixPGDJkv6NT7iPHXjM14GnWACaFBeDHF1RwKkQHE8da9KHHXcpqyY2FDkPsn7Ppf9Go8DdAcEAMLi9jYgK",
  "key30": "M1YSw1xHcemkpbSb2gERpNW5J987Ls4pV3jMGYjTJtrY11EYGY2aET85EiMdHRVsNMQKc3jFJayV3i4uVY71Fed",
  "key31": "4KXBHVHXz9r3kShLqirgQZVPe6wPMiyVAoPdZtFFBUznQF9ZXvDZpYf31VSGZCcGyKjN9LW3wXVj6e7SB6zJHvMb",
  "key32": "Z1G2rWJBbmGpmbiKjuwRBQ6VpJA79BVtJcMweDaN73PT2CFNZ3VnGeCQxQpiDFHEcnaLQvavaf7uB5FKTuqYvuk",
  "key33": "4HxA8hJWrbdMgp1uAUoWBQg9xShGUW2LZTWuxJMDSyaZc8izBsJFBPvi7iNJc6Y3yLYcMLnRCrEj1659JYR3eSje",
  "key34": "Cu6TBKCYPfku6kdC9VZk8Q9YPeU7SN7DgNLGso1LeA7NNyEoe7gUTicXcgzs1K5QkNkJHuK6XzU7DSC8SAxBtZB"
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
