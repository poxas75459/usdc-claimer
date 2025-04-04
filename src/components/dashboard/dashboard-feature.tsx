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
    "67PMtuk5ZAUyQfwYMXpwWNxhxv883Xkbk4G4yjYXCqG1CLcsmpWz33GYY9qZioAQ9eyNBzjKFyv5CHL13MNLSqZM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nd3msUUJAZmVrFekpJGYvudih2xrKEgXHHktimka1XFDenAGmk5M2GUzkrk3qX4EDLXb28amYv7CkBPfcPuBGMZ",
  "key1": "44JLmjeLLJbHGe6cYb4bcyGUEp9Ck5a2HZekhhsDeHfTH7tV86pSUP3e7BPPeKzFCjB4cMdGAnywDBXMrCdNUYac",
  "key2": "nmuivZHT76TVA3UciBkPvjJT6Wi3ZCZ3QjVEMg7ekdwdSLAQF1yTGVpT4Et46q88XrP5Cc2Sk9BPMeShnxWaTYa",
  "key3": "3dTchShUUjvGhiJT3Dxt25Qs7HG9s3WMj61sPoU4GcroCfCpTG75NE8xGG5h1YpHcmpPHrxZk6FnLmQzkho85Vxk",
  "key4": "3WDpiYPjw75tXCh8PbYoNpgnq5AwG7AMBC3LKNpyqW1dmPkE7x1yBUwV8UkKVMnpkMdEei7Ka2gDF5NzZPPTv1Xi",
  "key5": "291yh4b2t2xaisTuj6mdryg15bZUfE9R9ppgSq1JmhscjkaX7gq2iVKsP2KB3xpbkUuHGfRtrbnwRtUwcKJ4MvAD",
  "key6": "3x5XWRGYKcVVcAh4iJLhXo4xkFnpVFgSzcoVgxtmtR4JWFkPyyjbJT3HmUULo6NvB58xQfdnJ223kYtKMR44xUJ2",
  "key7": "5rewU9usE9TaqkNseJccGvfw7w5PisEASiEEoG5d6nuXTd454yCEwy8h42vZP6HTExAnT3BkyS6ZmDpVistnnLte",
  "key8": "2NRQTDhk4UJKvT26R5dG3h8vfpTPduztrDm5ncrqncm2qvNkCAXRdd5CnizYPvUnT1NWisBmodSZ4p83PhtfDPYM",
  "key9": "2pxCKis6bAVpwHAQCTeFo9a9sZbPWpT75t1pjuozmksaZTnsM3Zi55tArAvk21oTt5EvUNxrMgzi54gDgjrVqwKF",
  "key10": "3NBBecxQ5TCXEE6c6H5N4ScFQbtGesjAqpmj716w2GDCXK7wNPQGnLcSPccrofUBEXWPxxBbpPGXkbsiU7Fdai2k",
  "key11": "5Y9Ab1mwN7dBxD462FS6hCH7LdzTB4LmgGkr3cpMtdbumcVsAW8FLs3YXeRiFjLokiMswddU4gMFZT3VKabKfDiC",
  "key12": "ceHKJVrnWiP8UkAzdL6FaNAhiF3EsZYFV6docWp9KrHGuNaziYuEAAproJLUUjgjbLn4pQtwhZLfzg9iGVEpMGQ",
  "key13": "2VDtW1PUh4sgVrRyhy7i62YLAaDDsox5c63qoc3uYPUeKH1yVzedNngpRZPUfTekprpndGgarGGYRgTuGQeUhtnp",
  "key14": "3J1txXpS2PA6R2gb1J4whR2fL9ZqTM6ynYkWM2J8xjXYzA5U9pecFh4GEVVhHGwGyaP3x6wYHJcQ6z6d6zG2kpd9",
  "key15": "55gWwociXqBX21ZyK3CHJBdLcJEN4qBAPCgFCHvPHRQXAmUKtwHvpt9Ek73emmgS7aWn4GvL1vUGriCkhS3uyrqF",
  "key16": "3SFDotoauNUMjCCbzAAEPwRQNJ5LePtt3FbMJQShHccteHaYfNFMnf1pDrQpzSex8tcJWKdTZM6F4v8dTEJLvJHr",
  "key17": "fpkVzuVouUakUedJYpAujwfwpirxMGCVYx2PpfSHkcVPMDyaAbdNaaF7TB8Gc2QgjgTx4FgXiVCvRchExbc17cy",
  "key18": "2714bUPPR4yDMM2GpoJPLY5eQzkEpexpdEr7U27KNFE2HGajLgVeQyh8dPUfDbwML1dnzPWGdjRDRVSYspsRAz6Q",
  "key19": "3ojzaC9YGogALixK6NUW42o8QHfEGWVzXFXb7tj3iDDgKYWk4cfNrcZtziBYhSzzEkdncuFxagK3WRT7Rc9TbvFD",
  "key20": "4iBVN4NppMkNnd3JZoBKp4XrCq4kr1HUiA15JZ3B1Gq1sRqVE2nBpPwFEf6fPZgXqn96uQufWBBv1dHwumf34aBp",
  "key21": "29WranAX6nDSM83wygkzyb89EbrYFGjJBEA86bUjLa4BjRDTgRMeFE8uReKUK4Yx9QqJvZwRpFQLaRqrsRkXmhj6",
  "key22": "4enFKe4hz56fThamc4JvaXErYCqTkgGybmdYtiVxDSd7swMisapZG9pPs8n7oTQr8vhREme1S7cH7aUM1G1vrMZK",
  "key23": "os9SNChVVK6Fuo1MaEVDuYLyr9znvs5KJh72VVeKxNtd9XHmCFcddLKKrSwnP5RSzeLau1es1JJ5B9JtY5h5NZV",
  "key24": "2T3tWSnEEeDzUvvgMP755LBTb6oAAB6ch6CmbtPR39gMgypx6PWkeGYVP6cqKeh7n36Fuf5DWjVjXirkQeWm62CH",
  "key25": "wk4vEJE19wGeScHbrvpKjA8cT7D4CU2wPANbE5ZuLRwuiw9u5h5fXcmMVGexA66t3zAZ79RPecgygHqYqPucwtm",
  "key26": "3FDSjASPE92yKepMYLGTzEqu1qGk39zXDQjRarvfWxrS3kKtsWiR5DZhG5edp6M6UgkzuZDBeSzDGyTY1mUHmfJE",
  "key27": "3r9XLQvjAfrP9t1pHczG1zW47QCVnswSTPDLaw2BFmMDM2HuzZxADJtykp7PmHPE6sNAqqoYEsHSR36q1ZdArACH"
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
