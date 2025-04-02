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
    "AUGsPiTr3QYAoYk6HGg9sHQN6MqVUsRaT8qGXwKmYe6nasTDP8v3h3rNcy9BgwF9fvXoqj5umnHnqCsBSXyr9jq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n35qHBQEmhfgYxi9oCFrYJTZ9npacVbufFataULGUz8mnJ1sZmaTxsLAjjADdoXQu2x9uf4Zt1sURTowueA3Rao",
  "key1": "4rVpQKXb98PniMvTYBQZwQQV2Lexk78gtMjerpZneibc7cVuqXFCuA13aErzWfvfWSiDX6wknhSQgyLN6FAZHsEu",
  "key2": "3KPPu5TXAvpX8ng6gpTAsM3XVN4LyA2sd6Wj9VyCbE91cDYR9fFGFGeHRRYGG1rQBPT81AsZQWsMcodg7GC5AhRN",
  "key3": "2L1LoX79mzQRGEQtkknoepgHMBQQhSZ5kscPJWRT6atCeiacBtGF9USn3MJwzYzF7WKHp6GWqu8jJAEyBpbapffn",
  "key4": "2NkPWWis6oYGAe5mmAbdun2tJdn9AJxifgERhmkyeAVZrsk5J1VPs7E4uDkTq5LyBwmuSoqCVMMjqnG4cSXmTjjP",
  "key5": "mC2dZPwAUA9ddMMf6CMqVSXcGcUnWyR5xhyYBUTiEycqkrPWWh17eo3BXi7NTdxdJUqFVeXbh39GGQLJaBNSQW3",
  "key6": "3kEi2HmJnq498kbBMDZgj26rNAydaTxC6p3fGvVwQncYhnkyY4KfbrR6PSsKt4RbVzBGAXCj4rGo1Awt31U4QJDu",
  "key7": "4C5SmXsbKhYiEtzGHiXRXCs6PN2pDBRVcjjxWMcHJvTzCP4eCSfe85ieZaVrx9naRJguP91E77c4aW3Cvj7c2ZHa",
  "key8": "3scjicZso4wmVkxme6auggDFNCjcRyq26pXoNT92rN5po7PQdgBzwhBCCsY5ikCncxX7PDWueEyL2Yjew9M4AnfZ",
  "key9": "3vLrwxt6FfYNdPeP9Pj1sV7LZSkhersrcAxZDLRpz4fAnebmKBU7EQM7ZxrZArkd122Lb9aMhFerPj7kv2Eo6Dt7",
  "key10": "2yir1SnEGnSPnigybCLzygDnUDYxc6g2e2LShzLZyCqKAwNXmpuGQX2bKhPjFNbveBm3cg23e5v1Ru2ohdgP58AW",
  "key11": "5h4A16WZ5q9u7ncgrh77PvVm9q6ng7KWgoirL73b1YubmxYpTUCrcrFgWzHqeZAhh1MWzc36a6yM6yWJ2BX3YAq6",
  "key12": "4M8EsR7V7pxBp53cLEu2qSd2uCZgjgXHkoXSMSz99e9Aq42x8MJmYNVLTLokFV2F8fWimCY6str3LpYtyhdsPSwd",
  "key13": "2ai3pWyYtM4WFYU6StP55baKFmaKRnA52o69rbiJ9idWFQcPB4hBBcuSRXmCTJi2VraDveNCDEGVqS7ieYqaDwga",
  "key14": "E75MCfRgCmsLNYCsMVJTccd9DfeeNCqnrgbRzU5WoRzirCo4DbCJes33cTQuZQ1Ao6dGFm9y6tRCqwUUYXmeTt9",
  "key15": "2yZP7mEZ5JJARbaK2RjSmcD8qWdCCRLwTr14uG9G3o7TP8nEEs9g13dwwVTWBnHGNTHb9zwNDBP4buZqVkNPeBUj",
  "key16": "25vZnHbhAcjE6u72iKmRXkoHgDvY6vc46nWxEXVM3PDqQkPHQGK2HgcSAUDs8EzSBz2A6Vq8D7uAFBd7HVR3sjwU",
  "key17": "2mof7jujqEnrvNJ3jAxozm67XWoHqEDpV2cB5qg6fDLjcf8s7teusCE9vrqGV1yqk1bPR7AayW9y6EZYNtrn2Spm",
  "key18": "5G8MAVS4eKHczrxi6ixrLAwPB7nH4iwGgc5fkzvvLuYS4Kun4xPNGR8MSRPAovd59TJ4ercwQikAcBmWQB5Ahe3z",
  "key19": "5BND8cLp3eRvVXF4wHvVgFQFS4n69LZAwfPf32Xqsw28GRQebyzsiWYSK5Ht5cDB1HsFMVSbLTPWgEn5emHHNQbH",
  "key20": "5PYu4EiKgPaCMcxMyk4Boo3L4sBm9xgLRe3pni78dgkoGY8VvYL4VUjTzpQ8qFUprWU89XZyfpvviYATV14aBFdg",
  "key21": "5zYa4a4n2K9R8V9i7yJAbkoKevjjYvWwxWQXHE1dDukcGi2uugipEZv9hrc21WvDYn9MyN8AdwYvxzVWhEaDHDSx",
  "key22": "299qgZTpK13Uepuh2vKEmtmNGKdfnidXkKNvZfA4fFhyu1FbmhaqjC5nk3M7mYoYD5hPfazEYW7LdXZEtn82jws9",
  "key23": "4SpcyMvFdxKi9mWB6kV2PUiTAwT9fvLUt6hHK9QUf2z91BPKSqLMxg883PYRrAHkbmqUw2CT38j6BWGmcDe6xZ4U",
  "key24": "43xPiXsbgLahiKRLm8LtecGvTZ1DwqgjHajPpiaymJfgMFN2dANFj4bck7z4hdnFRUhSupPETUa638Canp7wm7Pq",
  "key25": "5krr3H4JWDSCmzpZ2HamZwPSf6HxHojvk565g6ttNrrqer6mDdDpCeerVnF3kxLeXbiqBpatQXR3ejCXbs7XXhGm",
  "key26": "3qG52KqN68iCjSrjbgCwEErmuX2LET6NPURhK3FJu4gCH8t58iSCxsbDmQUjbwPkBmHJBaZFTCD3RDKG7VbuJp3z",
  "key27": "2etZ5JRsEA7nvo1SPwLt1KUituF3YcLbpxjxDuMgNA2BaGU68YEofrjoqJdMgt5JxKmbBRKD3492vPF7K5ZDgQi4",
  "key28": "2PgbBLcbAMkNNpu272teyn3b6SXWjZrrTBma8Rti6tKCi4yCJ9dEkWBkQnRwkfe8D3EGSmsWnKts5P6uXAHYyo6A"
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
