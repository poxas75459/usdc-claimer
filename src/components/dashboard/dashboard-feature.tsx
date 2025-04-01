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
    "47KCtvVdqBWFghvsNXFYSpGzYyXuw23JqTR6RG6Z3M8T8UCPAkCzdLzD9diroqzz5rNMaAyXMMPQ3Cvw8yD3u778"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2errp5Xwj6LG1bR7PdixJVgFttsPbguRY2zQKnapDktmWQVdUSpVwMaP13eRmWSzcrh9p2WmfciPPpxTPv69tXHk",
  "key1": "jYGeF5C5j9PrPfKiNQNsubchQ4Z9T4UfqCfxy7ApuizTVaqHCLGBNrfxgSUohtwtre7FNNzficMemzFdxdGUbe8",
  "key2": "fCZAjPAoPZ1greMGSapbkw7ETnU2rRSRXrpbAoLY92LyJEGMLfE62cjbWsbRJLJaUqWstiTKKpRvR46juZUgD3U",
  "key3": "48SwvuXuKwybuWTbVdtZqqxvVjbmLTsYYF1vLiWDtc4i18ZFks3ooJXr4zDiTT4Yo1bqEWDNduLkw6ZM2dyqjKE5",
  "key4": "3cMUduosUZPz8Y4mKqQrfs7ugD9rv8PTdy25SkcJgQccjgVKji7B9sBcuD2CYdNswMER9xaXcJ2cgps1grqj12cw",
  "key5": "5MYCAYRL4kMCTungrStejo6aywEyRHaZ8L7udALysUbpRTz6CxaxvvRhRbmmknPxsDsJd2JgAeoWeGsJwrVhvUC8",
  "key6": "4zgqvsXe6oHtm3HKdW4WnVM8bn2HZqj54rkM52gt8VfnFDSYGADDo85x2bBwFVuDg3SiMhraSA14EkTdWeNGtFQ6",
  "key7": "4y6ThMgbZ8SvUtTMgVkK8SX6AsQGFkcsHzthxxskXgQz2pFaAfrEsDq9DjaFrtNwuQPzWrxTdBd7Ys54oAnjRkUX",
  "key8": "32d5kSa7Ky87o19awkvK7ZHMNLLJX7GDsCryM3KX2foVSp7DJvJScH5ESsMf4TCiHENmLtoL3nhFjyw2g8KAzFmq",
  "key9": "4n8XWWYcLx4afw1JBJKXy3QKPa6YL4RyFbaJt2K3SqxQvZsAkWGmEkg8LQQoxVbZGM1msDX7wq2SBjNL1QwFe3MR",
  "key10": "2KFf93ALf3h1FAt5AzgjASz1jswRwiDamMvSYbGEhq2oDurxQLwLxmkvAmXZhgSBqZCVea4JQKhUbV9r9sWqttue",
  "key11": "27QaDjVv4DL7dgg3DQQ4943AaimvujAFLfB1TQkcrNCHKMe5TPyeXJxneLqU2SjGSJV45cY3Ttaynp8fsTVSHiYT",
  "key12": "5JTZWJMhfQNCcGCjN47SJZJsHLY7cHYSi3EJ1TUR7B7rkEzBBstUiwouR2pySH9NcswhWTFK6o3NiN3YHwhCZbrN",
  "key13": "uQTtiCjne3PMaTRtj4uHpc6W2F6pqSPphvknCCnuY6uX4RmeJp692ySwRTz2r5GgbqorKuppcenDud6bc8Mk5uR",
  "key14": "481QCcgZT8MTGJXwdCrAXFHdxU5bt7654Gj99kS79SazVVe4arwxUsGkKpVaW5TMYgZ4nV8nnNYfEyzWbwyofHVB",
  "key15": "ixd8EddAKtcTymR774WGUFJo4CKg3yCNXaFa6dsEnGJawApHKbEMpP6EyUUa4kmVqezovv9YHahq98Y8idT3s1c",
  "key16": "2h7j3cqASdBMZck2eH3BQBC8EZJKLCYfm1HJhWBqmaMEhB7kXHpBxFfNSKW6HQ6V562vmSXz1KsNZeyooUg9vea3",
  "key17": "4YvFQU2Bu6tL3Ahs7v2XiNm9DkashDjW45CngfWo2gDcsGkB31Ejvo34V8Vzp5Ggs9RYt68YZZ9dc7sJaqGS9VaZ",
  "key18": "2fUgjUUWnnL9ZXQ6mf1posKwLEdLTRgfzUaPHRXTCDFqagNpNiP5o6cAhi6N6SvGxQMXscmKTN31Xa6aSHu5iE9i",
  "key19": "4m69jZJSsqGMZuyA79RqBUb1xXZhwfNV4ioSoTXjXKsG1nfrMmqxPWbdDEinU4kLeyFb9VJt8hy1SPsFqnDe385y",
  "key20": "43V1AegzX3TCPCY9pb3ehkcamKRV63do6MCUtYG7BwjoxmLx4Xg53rcFrnYEV1mNhtMH2S2nxMPjHqDXb34S3h99",
  "key21": "3UsPDBDNL3Utc2PcK5pUVNNiiCfpbMg6kkufmwecuHjM51CgfmxnfCEuXW9wDgZRFn9UbgaK8q9i3futpkQTLeZ2",
  "key22": "2PrgqxPCM8nTvsjiMmSxvTFGGfrAzSUDoFKrdFpbP56RWrge1Y6iDmgbY3t8B5KtZRvKN1a8bmHkvJEzfj1CH56U",
  "key23": "4Y2rz88kyy54SS1VH94Zjh69x3VuPHerjiHAcwLb5mZ283xYeHTtnvPFCxT8sLRY324ukJFam3zSmi1pGVjD9nJZ",
  "key24": "3gDj39FBrDrUfHyyjQWRSGmEXVhsxKqD5sDdzZ6KiiAfJPbB4iqLArSyAmrCFKCSxSrTAxpxrC1CLTpAjF5MHt4m",
  "key25": "22SMxK2wB9aVTdJjhkigikwBqNUUd3Vk6KJ9hZvozbpCiKV2bfYbN4VamRFa4oubY5araW9oCPLV6Y5HxoLWP8Ky",
  "key26": "2gSMMXXb9Gb9HYg956S5FYE69zX7wC7P6YFykf9GYhREpCF5wg9mkizE48AMfMh3NSj65woN84JnAC6dDVPRkFWj",
  "key27": "5QdciNHink4m6LYCL9eBoxytLMYT36gUWA9xijqXjm3EqAjseTFrD7Ap6f7E4gJLqgrtNhSJG5EUGH2J6Pw2GDgC",
  "key28": "2JgXXYa3yYMQpxsi4MK37pZe1V6rjGEiMctChrDeBbPLUBQtRy4qu8x1YJNQiVTQtHKPShHomPC54R38cdkZCRuz",
  "key29": "AoUqYR8WTA2YTuhKR4EFbft6ikhbvfACMDzpTwi88ezyijTzXu9TC6ZhAn5tKMDmuSfAfgPkg6wuHoT9GjUSgV4",
  "key30": "62Tus6Th9Cvw9ctk4WV2yhL94c68Q3bvmu3iYnQoFoBogz2XLTmMxSWR5Ai4LfNhszonPLECR9MsU2o8KAHyH9co",
  "key31": "3bcHweqZdYd6y4sCwHSb5y9a7Y31kYMTYNBKGRjaKfnrykt3FSHWYhvSyHUQ3BFmzvYrhC1qpPpLWMuyQNacuqE5",
  "key32": "2dmJFx7QhmsFy9s58A5fg5u1uby6fbR2QZf6igkLdRnWzxd5fxVsQbV1MBV2ChSiejTW8h9GWq2dDTw334Squ2tB",
  "key33": "36dFkTXu68hxvJ1QDDzPBfkacvLYHtb8HntJBGk5woKdzRdv8JuQPQAz9jhnworRhyT99QdUW5JHhwudB2cA3agb",
  "key34": "5BX7tbniBiseQhd8ePYmcUX4Ezh7mmAiQ9SCWdfskTxKjPHNq4AdY3bwYf4usmxafsptpRPfjXnAMfkJjz9J1KKG"
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
