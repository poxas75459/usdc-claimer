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
    "5NfUTvounR2CDnGKMdE2Zq7tvwMMRQJcn6XZSrG4JfUB5nV2SeBvgW4xp8tr86Ff5oVx4gRbdmAHLvoSD5XjHxWu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P4xwMpCEwX48kvUH5Jcs4Z7rArpWjAU3ott8W6evkL1tBQogNH27fYdv6oqfwZgQAKJN8TNmwrfHegJfTBcSpdY",
  "key1": "waKaf1PUP3TM9eNTgX2BsVUkCpVZwcmvsv55XGVZFxzAKuddwcFU4C6kYH23q9DLjzEa1bvxm8ELCdQHP7VdG3S",
  "key2": "3eAm26nDpBKmJX2mDp574XtNfyGSL66cK4Hi7iJmb3oujPzGHLxNHTKRkP7WSBhWPuScS1NwpeDmar37m2AUG84C",
  "key3": "XdfJEXTwiRaYWAfRBqDNrnZevU5y5D6u939E5iipk2joNMdR6j6wCmu31Dew2cocdx3cqcUjxuPA1N6EqAcVYPX",
  "key4": "59SS84HsEL8t6KErcHNEEZ5tTTbucHYyNp2NFGUX8kj7EvW8p8fH4AevkK2DozuWfNod4AXHtTV5erJAZLTHunw4",
  "key5": "4eRoUFfa9MsteoMn7KjdTUzFUoxNCHSAbEk5msNx8jujxaRoaZRjKEZSJ1QtmKDKBq4rRmEN6zZfSNvtwnzXUYYM",
  "key6": "5uzH3VXNZy6Q4kHQy1vNeJFvEbk8ohk43U5ZJPWBWesRsLwcZTYeePCg5BeghUpswV9hchXAz6VRSZZrTdQQyvzf",
  "key7": "2gy5e7kxFQDn6KSAZioMJe6H34KyRR1FoCvGEwMSrfkvZZF416rojdgQCfcfGvaRrNPUED8YgiwQJoNn89xwzLvv",
  "key8": "4LegBzwFCaN94vuzbJZi5FSvZCKbUicaD76WDcEty6zFe2JiMPgYRRNoaWinJ435PebckvJtQ3iJrrQs5skP3ApD",
  "key9": "3zqqkXrFFgd2LYunCEYb1MXkd153gfszV9VmwMsRZa6q1Cx78tD944PBYgxM8KWZpC6BxFFsuihapseFuUxiSLVE",
  "key10": "3fydrtjptuQQptkWGmhUUpq6oN3GctzyQAsKGE5W3U5dwHwBHqwDCTfnpNssyFBEqT3uFmoxZsuXgAhxcUyChmAD",
  "key11": "39zu2EvsJDoo7fVG68cpxgWiv26dhm2HYihHwCDq3ULjALuwRC2rkdb8EHdV5FdXFaSUReJ9EU7WBRtispAN8EP2",
  "key12": "55q1aEUbkhgzhJ3QzKqZpv5zuB4RWVuw4ufX1eduP8puYHZvVgicZXqaeMASAhxFppg9uNrpAi9z7fiUp9NDGEtc",
  "key13": "4SSSXHHcgFXUVgBQofMbmHPXz41TwFoB1hZNrevdkFhWwVC9fY8PpCENtSF2bB7HQuw4pfoqj6uGgX8T1Ckfx6p5",
  "key14": "4FF755X2Drbnbcynv8M7q4oSz9RabHWx9jeZsy66JLWFNqV1XawKWAUTkrYpj64TVL3DzXuDBUhzReJXVm9yaXsV",
  "key15": "28VU7XCKrteuABsGVTDEKhU5AroEagdSS94jUmJhrNy4yXV32St4XDkxoFDEVtWeMDUWKEBTjUNgjzDLD2s5EWy3",
  "key16": "4uKP4nVJQeJ77uuUeeZZPg8bTKt2v7sjR8SezFedMrRvKpkYk916CKodRi7qWWP7ouPv4zcnv2TKvJoZA4S8Agac",
  "key17": "59qTFhs23vd6qkit1a6UrW1f2TS4jUhxj7ypq4eacwafg3f8J58d3f9cThSzPAbjQC8j5s3Mm3c6DzmKE81z6gxu",
  "key18": "5C2e9U7YVjn9PpEiMGRgst3MXdhDfgQ4SaHu1VcXfwS64TKpoVhR3H7F5qPfx4dasfydNyr4ynqcnhUxeiW5Mwfe",
  "key19": "5EZ9vxmoEsR6TrZRTnAHDpAKa6WvXJVxRE3z3dTxiSGT5yUz6trc9XwxVcsH2ETnbddGNmh3sBXNQGJMeq2njh28",
  "key20": "5Ah3pJLNKvf99PqHhyzQ2Po5aMo3e9YNm9QCfB1Zs3QvvBEvqWiu9qTUsg6TmFRaR6N3LH2XMVrqt83ZrBxZA4gP",
  "key21": "onyoEDQ71TvGFW3hBpjmAkbWSyBToE5NwrJxHKogKSyhRZ6VZivBfcQuQYbkwkjzV2bVsK5EGtuQNyJNKeyWSAP",
  "key22": "BCn5jdCDfwrMaGN8kxtLiuZjRYXZqvgCuCu9grpJGfRKEZcM8vTu9McWjdtXvU5PqrkBD1X4JuwPgY56bFeHNNm",
  "key23": "fjBDwyiLRYwfY72h1QswnLwQV5EbVdT9Y8iWPVnjiP9bdJ6SrBCgjWHz1iuASb9S71ZAP2TNeFUNBWY224sfkdY",
  "key24": "36ksXAqkYH6d5nqeaWk8sqSdftEY77f8eMqcnwmwsbprmQn63JYP7E3MWrMu7UAs9969fFR6ApYhzGC5XpNc5fkj",
  "key25": "5nw6itPrDvx3mfpg7kSpNiJSZeaBAP1AotqPwv51GVaE7PgeFnRrsPpfM8ozYJw3iy7QmvaaRzihCtofTdUHEpZz",
  "key26": "5xsTb3n8FLVTCixRL3UasoshNnXqUn7wNmXMTSpyoPEBtTQJW1o3SvtjuWNy1bEwMXZnt3x1MJH3HEFsaugAKeb7",
  "key27": "3hd2qgR7wTVUZHpmdL887WvtxgfazeMps51W6EX4bH48GUgGDWeiKCVBR3Rf4LYZQcx3jU6xeid5MufpkLeLnq8W"
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
