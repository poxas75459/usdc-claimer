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
    "52B81nReJK2Spk2bEN8HsmdAoCaKBSdg8amgF8ytEhk87bmuGda95mT3oV6t4NNCGCtZRDsJY8WdmPoKHh1fRTv6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i9XLNQTP82AGNQdPkvnBzg7DeSATav5thKFdeYUbajdfUpp2DLRcmngqhZEwLW8HoMnEGjSkhXGcGExn3aP5oex",
  "key1": "5ntyDgBjMnwxYd2ZPzZZngHZHNPYVvaDQamkxjdKxeC3y6QFSLwpN5xKSCf7tUs4NHVEpVDqRBFTSmisWfTpXxXg",
  "key2": "5Pg3NxEQquErfgoU4YywBjbBus8Y93qvYoeBB1h2mq7UnUmDNtTdBxzx87QBSbWBsDj6nish7ZkudtkXZKgaZGhp",
  "key3": "3NTHTAYMVPh9yarShkGiQs4eAJ7twxofp5DZVvUV3ytQhP7ZHsaiJ6m3JZJgwh6NNRkGBmCR3kKb4TGcExLTFRKG",
  "key4": "2oVseihxPNHMuREHd4XEtgaqQLQvdFp4NXDAUMjAcgNP5GGyUuWjDFx2wWLpZE2JaYDxQCpuhKZhqC8i19xwZZQo",
  "key5": "5NRPn7jJEa3nAAKG6uzGyn3doBmGAftHEVHCkkknt3dtGiMeAgmB697GGYyribPoUUSgRD22XGcUuaZb7eJ7seSs",
  "key6": "3UVkXjh22Ujk4kG9d6iCQc3z9CWEuyeitxv5neJDUKxC2MG3RZmNtYNEdspNTM9QCd6fqtgQdSBWKAnhWbfVaYcP",
  "key7": "5xQo4hYarpNzsvBXKaTkAHpmpTk9ANe57KeYoVpCrTJarabxUGyNYETfVE4WPTiy4qBuucJnG1rML1EQcU7rHNga",
  "key8": "38N4Dd6AXkzgneJQGrTKXF419CbRwhBfbaWcdAA3FzZQhEegZXpdzKkosX2uegYiz5uTA6fnwedBEXcCyMfEGWpp",
  "key9": "2wmdiMwLq4xWxS6wQPaX4TVPe9LHrZ9WhT7BYRLoWj8iHpwCss4hBjRzp94SFpvXMLijJoA3diz2vEMtKf8yR9Qq",
  "key10": "CBsHrBGobfHKsUQKrKUGebtTNYTrk756MXmCBE1qNEXmReavB5r6tYKyrbcn7umHr5nwrBHsk4sFmbdXh6AzPNe",
  "key11": "5jzUDdqqiSGQjr8TihKLqfFpwwUrkSyRhgdvXk4kDum5iGjME6TAXG4sh8MGNnGycz9WxAq2HNUKs8Pw6aeC1GGX",
  "key12": "4aREMk2YPUhdsejgkbcPXSYXbzcdRbuz1hmRuSe5j82ETCZHWbHqeursYrGFjDYeDtLgcTXumqXHjbDrzWUTcLiq",
  "key13": "5VRPgsZ4pcSrhCm7PiXe4hDPSzE233GbzvwnUSa3LipCDfGYcMYbngT1DAZj9xKSKfNRExymADgr8QgRMZgbFjDn",
  "key14": "4oKrB9CQn2jXga2icS5tuiwWk1WVLtEVNCnD9kAsRRuh6GrAM5CRY77UtoLxBaneoDDKMRE1CuKy3rLKPYhTaeVU",
  "key15": "3r8TKgFckZkFaZ9hxpgXXod2cYUojWk5JYhV4oyvsZSQKT1EN1QxgcKRSmYFuVJvd1XNAqAmQjwNddFNaS2pnbiY",
  "key16": "2igirnNUrqqmHNWuNPwLhgjufor75dK6pvjxvZuzUMLca42e3NFnvrKEM1Jxq9oomi1eQiiozFVczErZQNMsY1gx",
  "key17": "2G5fF69848a7eLv6YNwZsdh89yodcwPi1gSdCKQCznsoTZk9Rbv7FrhPvr7iZX9y8pUXafmBeiHtuwtZFmQhka91",
  "key18": "4wfTfMvbcXiEH7LCs8NzS81stLkSnNaTtfnBCCJHJJKnrx3KVj8x9NkRi3PiW7bMoGJY7gQ9eGg3GQRv3ZVnAkHg",
  "key19": "2gX37HLdSK5EuqdJWfDbGF1mHckoVx76EqYf3KiFDrsLLVKXMGeYnHNeDRKUrQnRZboaC9Ui3SbKK91XK47yYUbH",
  "key20": "4qCPh7HuAfzWXYbZuucMus6KR2VEnTGn6eyffMgxFdhmzaCLo4w1D7ohdmAmDvv4AikroBsihUeJtLbX7dmyPHSH",
  "key21": "5y9Dspz9FCWGvE2heEv94VpKnp4ghg643odj67ZdRiu7N69CYCi1Uoo89p317CMr85VrULt1bP3tWJFCXUZRNUkF",
  "key22": "5johS9HsktLRnE25xzVkESjedby9q1nCHxEaM5RdrchwB5VATzVseYDC1K81kVVpHnjikoYLhbERbF3E8HddoiGR",
  "key23": "3Q2PaCrh9h6hZd9S14CWKCRqN8wPWXzxH61xuMrJwTHbL71t6HPbi6pS9ggKwCGUTJSFnpMvLgJHB1HUrsHaQMQ4",
  "key24": "4hoNLM5wGRgK22V8YjdsWEs8MTT1FiatHGhm1EdfuT3QfXnzqn37zpPcMdMgqhhaHJSjUXW8MUfNKNVdBgWkEEyR",
  "key25": "5CHYcraeAwUJcd9yyYU8WS2F3mqBgKi1aUmivGxdbfs9xDj4hKmsFJSZyG3iXQ3z873wC6xjg2kBqSvAMEU6UCUw",
  "key26": "2Er6uVuwh4RseQF1oPpEKSzuZWqHerBKdUBhsEFxX23E6hgcpMeUhFoP1b1DQKTKe98YC68TQ8yV6kwp3oCzzwCF",
  "key27": "4uMWWFGg2m2nTjJdEJ1uR2B6ACdt9u7itHxeQCDsqSrJtQuBXagvk1pR8zYB9j1znQZqYAVPPdaFjSRUgkA23NA3",
  "key28": "YtyjPshrszh4HmDXMY9xiwtNh5vzR5FiPa4syps7qwhaPiDF7bnL5wbR3yosSztW3qdsXnaW8UwASh5HRfjKiGj",
  "key29": "4tDJQHHnYVBmiyfjWWV5sD1baDcQeAd8EAPRqmF3HGB56xmB9GKojAbzFADuhoqvKB7dZXNnETeaJZPysUwpUd6n",
  "key30": "4MEvuUCFced6VAKwkKckuFcMCSiXW5Hvm7KuQyga3EfQPinVZSxJ5rmR3Vb8AkQKeNvHTC4AKxPP8n9hAJAbPD5Y",
  "key31": "49BCCZ2ow7JzAy5uBX4uHVucWgmvWwwCYYHbzhNv4qDH51tB1imoZ73ZnRmPVFxSs7sPoFn2YYQBAD2tWe3XPG7L",
  "key32": "2enCam2atxB5KD4cez5wdGr1GWtpwkdWvZgYvQLk11egcRsVJ6mkahPvD2fxqocHK1ACedq4orAMUJkxQ4moqrR6",
  "key33": "64EnPabhRwwn53ZCzMo8vPTGExKSdmdxJS7Prop4uB6EuhpFUp1yLw98f7Tpc7gcbvv579pBJE6ziuDUXHajki7p",
  "key34": "wNBxwrbGsvWxsoaNKgsua5ejiEhxCqXkXSVPQEEF7qQQmo4riVZN6tor1wqmdAHo6HNxgWNfzZT4ZYoNUmXWMaq",
  "key35": "2ihYEaCetmpar3WRekfrzjv3edEiThuFBBMxNLsDTZVx2yTHD7G1aaaxsjxu8bM3cFUqsvAxx4xPrvCQSP73x7SH",
  "key36": "4ecnKz3LzBeFjsnHvCvMwiK3Ln8f8AXt9mapfXWUPHvvSxLBVKE6NsEbDcFWNbVC9q98cgBk3zoUYoaSARjXNfH6",
  "key37": "27tCGaGnp4mysjaiKaQH7ZtyT83vHwbTRSzwY2SLRwhZjv7dKVsPUu1v447AQDs1ctjfnQQwj2oXZrPSKaRuctHv",
  "key38": "4v6TADibcU6c6y9Z5y9tU5vSNqYFtZWLiY4z1nCK9soVeQEBSa9PAUgE39q2kVHEKEynEz5QUaP8hss3a8TpYXZb",
  "key39": "4qCsPzXb247ZhbZc5eXMdsf1vXYjj1bKzB2cnR8xuaDFqLM2YfHdhkdmBewDgNv7mioPykPiQbPzJppNsQvCtxDN",
  "key40": "5xjQPu5eZ8okVVqHG1ZBNVodB8SBRgkvo86NTnHceoA9stdeDK12tZ6VumLgUBoKXXAEXs6RnYJJe3JtAW5XEUBV",
  "key41": "4EX3UkSByCU6ih1sC7M5PAjSAfySMHaehjErBJwHz5UhKy7oYFBGrEcXT3XzopPbjvMW8suuTazKxct5m2WvPWAV",
  "key42": "2xApQgPh9nnPQkyfFhqFueCUffyvmZHR2ixFD8nXx6J2m9q5JGmvd9cycYbtvErUgJcoHVbvhsaJt7HeoXGxjyUt",
  "key43": "hJnY9HH5txDNAe2keY4MddLJKoX9oio4pUWVuDj4QHRWt24ZCA3YnTqZaDnVVeNPqhcVfxxcX8j7g9NSL6YN8Lb"
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
