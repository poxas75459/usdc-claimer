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
    "47HRdS5Bo7pgxVPPMey3XUKfizeGLKsYuhSGjoRqwiEkKgBEXXeS6W4jRXXmmJGG6YWoSvD421EUYsk3RQK51ome"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WWADxCZJpDB5whHoGPvzfkKsCmjY33hn2F924wXpgrpCinwAiyFBEoL75QXGYwLJU6czpuXya7AAcN73YTfECBL",
  "key1": "5sEwgfS5dEpjV4UY8DKyx579UfJuWhvfSLgZ7Nnb924JHau4PkmVV4AuMbgoDJSs2DBcBKJk4nCFctE9QBT29wRK",
  "key2": "tM92dfkNw3cj5JvkMbZHopFE97ghRkyvNsPEqzferzH98j87Cqvx2q7QdLbuwvj1dZYgt5DHis4bF3mq1AEFMPM",
  "key3": "5Au1Mbp6SfRhdQctfQsKhf969qHFKBQgBm7Gm63Bdwg1ng8A4EM1326ohXYopNX95nm5YVnNn7dkM1Kd9MXmBgxf",
  "key4": "3QMpDkX5LEVxjy8mcVZEb3gkQZA5naS5w3bLnaT47MpZsKsQ9Pi1esCUQPwwWzWoKCzFsppJn123m8P8j35yZpi6",
  "key5": "5Zr5gqkSuKtAkSqS1jbjU84UmE43NjKhYtTD5AJcFiggZ1kGzzoui3VAT5VnpBaGVNvV2AtnbnZxJFxJc1icEGjA",
  "key6": "4VSQZ7zM5By3mNiiF6YiBv4CpLgKiyHSjAUomBt1YMxjszPXdLE6EbD49FqFm2AKb1MxQH9YV3j963yk2jEcNWnq",
  "key7": "5PYrtcZ79dEgxYMavxLu6anbCqASk8YeNifxRRktw2GtjHHCpCx4skixtFn91anVtSEkCFGzfJtLHNGc9JWDRgyr",
  "key8": "2CFKxjzRkQ13x1jqxA7Pkd1P6rAaDzRLj1hLHkfU5RNcznHxidL1NcFTuVHgNgzVT8VFJJfQ52U21rwz4KKJoM6X",
  "key9": "4doPBK83LQJG5e4oNG1BsXVQzugtPNjuNdqsvWjgNUwAEPyg7Z14RQgLeJkebZme1afSEhaDAXWvUGLHxDjXTjEq",
  "key10": "4mo4rhCenLGeqwbaUfajj6xBBakfGyeJR5cWn39iSg9UKqwNTpP67KR9GRyho8AK7fr6UPQVw7StLVi9jKDyDAXk",
  "key11": "WEdkS6j9kmBVLFsEmDGBthrX5NH1GuXdYyizSxciUpG8dbRXwBopg4rpv3LvHR8jqLcM6uSwMeWaqhSzKdAda9g",
  "key12": "126xuZMiib8wA5hNyg8h5hxg2EY6sM3FKxjSsiauEgtzW82pC9iYndPm8pdVWS6vvKP9Ldar8ymw1YE3AxAs8asX",
  "key13": "2zRYBjoD786eaajZwZepUPKsaKW8igJwf2Xi14Yy93Dn57RBdYJPBdxzrQoSSJNg9ZsGt6P3z5RnQf1Pxecu3KET",
  "key14": "hG1jBcbSeb3C2qDo54X2bkw3Hiow1t8mbi2wbHG6bLaiNkWETKXWNgWqKdQ8GHmwMsSkT9wJ8m56nUyNZXgXk42",
  "key15": "3sfuRzJgj1FRLKTF7iCYi9B7D8m5Sh13qRUPqTTUqVkcnFuuwKA1vg7HkUixdaX7R1DavCB83kg5xUk17ATev1Fb",
  "key16": "2adpBjVjNgZj2GUXL37Rr76nQjXY69ctVkA4Eo7nSDi77gkiBQR79WjsKGEV1QZ46EUJVYoPAhnbK9d36SkPAgxR",
  "key17": "55QvJFCDMQZDkFraYz925dK9s9UExbvu7Siu521MemUauAJVyHCXPzCBNLxEHmRM21FFfQkqEUA1PiH426Q8R4z1",
  "key18": "5JA194vtgs7ZhFgj48gp9UrnzbnktF77zm2Tx64pa2J7u6nFERzdNTqoAAGZJYxr3QEDCeZRYu6hkwkKhmX6MpDV",
  "key19": "2zW3z3TdMousBfzoz7vBqvFmdQ4NNKADLUkYAPpUjM4bQSjv7vEsduGGH64veqXVqWsBYt7jUyuBicb3K7KLEzmx",
  "key20": "344nxdMU64xpcPGLv9K1mzBtVM2acLUWkQL3PeoGSAqj4Q1bq5LPxc3bUMCz6ZW4SJWGTpTpnUCiGHeKrHoJVUxK",
  "key21": "6sYegtKEXMTsJfSTuhAATakV8KpnhAbxZr6s1A1onSak9rTLRKMaaEQmRm3xu8srDXCdLvfxw3GimuNYsP8Aov9",
  "key22": "24PNRyEcpuQuqw1AofBcFYdUfYpr1T53gtHPuaUy2MjvP3C2neArxwuqf8UpVTpWVHoCThVYm7J4sr6jHFraHRxn",
  "key23": "5NiUgzd9wWEArV1mnzCXTjh28RAZJP19S6UME91wUJ6VQCnyTMrsuYwVfG8Jpy3Rk1hLMHrJ5E9Rx1TtShjVY47X",
  "key24": "5eMCVGVVrUv4GErPnxtJjN918qoNPmwr9qFEG2JbtvWAcDEcEQTyGFJPfzLi1YUP1tW1r6xf1fAxetsjP5sbJwYp",
  "key25": "3H7bbGhNa2R91sZEoiJk9T9Ssc92TQ3oPaQE496puMo3fRtjbctEJakwyy6TMmXzJFKAGu26W36pBj6BTn4mD5qv",
  "key26": "MDAaMwK2emixCzHmoyCq4B1nsGp2iZEaQZN1eiXqrGfakWQF8hHnEnXJCQhsngixNeWFSQCoQnmYekMMJaZ7DK1",
  "key27": "38G6uQPkScSEkmB8HGaVbeBgDTRFMUboW2EpPidnUBGs7ceRdv6XaGCCBPW4vnJuGJZR8NaM1e8akLjNEUeBcmoc",
  "key28": "4iZXiQWvBxPAbADEQqRvXgke7EYZtFWSzfeeHxb1oWhUAA7aSAKWuucDpHRCiGsiMRB2FSVo8FxJ12QjLZgS5i5B",
  "key29": "67p96BhKNMbPfw2t3gV8dh91PavTH4ee1Fz3fv1eBAvhfjbnPQv79XJw8ect6qgcLWV5bDmLLriwJbWCeL7q2vce",
  "key30": "3x6oow6wF2RQfnxEXzXCh2NonQc6dQmTSkNFjj1eAsDGwesysFqvg3HhUvfnsqMcnnU1daL6SbamSfmakS34cHDb",
  "key31": "5TPGrQcPom3JECQDJHX34JXVX869zZvp2iQjFJuM1egXTrUjenNDSVz4qXboGR2i8y4wfxszwExyrNLX76wapYWy",
  "key32": "5xpkjZRRpmazWoFosk4qdvz5c2Mq4cXGATwCSAB5JDLDJL5NFZR8SPGk8jrmbBkqR3aemcYtnpP2PBu1jQ6JSkVv",
  "key33": "35NUPBr1AyuwDHvcgqyuwMiT88vjTeSyCiWf1eQCK3DV9vXrUvMQiQaTGUaeMD9Rfti75J8fAx1VAcCzw4iLDrzM"
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
