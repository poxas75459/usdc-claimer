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
    "cm2LrpUCTjJgw6iX7DS1CtJeUYk29PhvWmtfQcjzzDVcfmA2sW8agYiDpyLARiqoiK4b3CY8ubYEyYtmqH6CiJi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yPTEtNdaFffg9CU1jhusgyXco8sdqZ8bLFFQTCkJrDA928XEAvLryTiGCPqK9vM5XT3NMnjTPnREFmTp5f6aCHU",
  "key1": "5XuLjb4UUHiUwHCbwvFkLkrzDiNQRHowKpJXpumbkETCq9CerhSKbHiaeWdSHHhGrkDiLAEVCLpB3oytmwwfTYpZ",
  "key2": "3YzHkp5s9FeMESbwFKm57KfnDH1n3MmYa5iUaQW9AFdMF5BFLC7h4rtNCruXrG75uXNx4vhqaCBT5m1t2wFYNTBN",
  "key3": "4PkazhUkYRetNyFfwbyT4oZNdmGEPZjJ8hFc6LC5qBdCrvEivuQCG4tV6D1bncq2toPJiVqEfCa8WXYkcvsFMjxN",
  "key4": "3FdBPKeMVQjthuboe23gZZiYqAYwTFadEBizQ2TSRobpZxpri9vr8R9siaRmv9fPD7SibB89oae7xdChoXGSBupa",
  "key5": "3r2iGvpu62RgdNYyvoHhirqjYaU9p3C4x6zeZoxyeAGM1qcRYrKQ8KBaB4UjRZzRatwLCworgzX34wNrAK8sRgCa",
  "key6": "MniYiVmzkvYBdwFMrQpZaBt6pk4BzrqhM2rFgBGaau3t6a5kvDHaSpBT8Yeesz6gk2oL25L185z62R3XMEbrMBS",
  "key7": "5gssoH7QFQ2abrZtceR24pKBtQ3tuZetrJvJ6zDXZoBeUTZ4XDcBV7KGY3b12V1DZivQUs9p3DYFMh4Utg17sXyd",
  "key8": "5mHxxocUosec6J5rx8XDALnysi2nqHjEPCExWx6zPjETdgkozLYsDXqPZux5L4oNW8YbJT28HHb48WxNb9DrLCae",
  "key9": "2yi88G6MfgTgLdHPh9YGsXmbmgm6giaoLX8kSo3R51V8YDE1Xn31ipKUCo3d5KuQByBQD8bTQikYG6QJpZaVsPv5",
  "key10": "4A3UpLeRDZW3fFLFfq4X2L7LePgAnadjqYuhFbMs1WePzXwUHUoffUnL7W6mfvcqeqJResVsqR5uj3m7qE3LkToP",
  "key11": "5xd2k6C82FKqZpqdE9m4RSkN7oJtck6zPjaZGK5gzN3AYwwXnXgh14yxuki4pYPRAePF18KUmRbJis6n1b6SZ662",
  "key12": "22BysbkwttDj84yKfEiJBpCGf93k2zwaWMdRh3HWDR1oisUCtU7vjazefw5FSKnEfycrsisbCdNhp7yjze5HJ3kz",
  "key13": "5NME6BzAySDANysPrkK8vmqpBZA78gHTzFiRmnfoLxC6CVHXkstio2FSHX4bcJw2wjkHro5k7qvD5h93qY88TeEj",
  "key14": "zsRH8eaBsFD8NcQWqhWvz7GRkRTGPX4RNNeTVpKr6LK7q7xi5jCGDWj2gFrYixNwxwaWFf15e2CnmuFnpuC4QVu",
  "key15": "59uYio9HE7yYj2A1cjkGsevDPXfWAegixJiEsNEZipzDHi7VWCQWeAjbFX2zvef3Kt67svRWaW4LAea2Nx4TSkkF",
  "key16": "qiGgJoLzyhYXkxUdta3WoWiDDywkbERQ4VbxdzX135z945aUxgjRgyquWoVVX2gPP77fdb6UfRm28pmX5H7VbY2",
  "key17": "5AGdQqCceXSBpwE7XF1hN2Chee69Wn3r8rz7sNyCR6vGjkCgMZWkTFSw1JjS9cieudVjUCdAzatkntDCqjsGNMta",
  "key18": "4oY8qoQnAqAShMtd1qNZCtjPu7akuQZ4WSBhBTdyjcTTFbgWhHKqGuFANecYb6T2y5MGpF3agpdejPY2JC94vRWU",
  "key19": "81zW5sYQ8ZFQ5zU4mc1Sd5faEaKzFmo9AKixMNt6n5NL7m77vSWWmuHb1JSsm5chhq3FtiCa6vGvVAeuhxxLe8a",
  "key20": "3PeJxXCN7pJ2W3gPMSg4ve1oCtQ4YuHBJ2g3uH1AunDLqrcc8GNtGgHRg3bbpemYhBUi1mHBYFLNBeDRmAsSexTF",
  "key21": "3RtBW5veNSKfEFAExskhk99z7o7zNWZ13pdtvJ2xxbmNK3W2ixuVbuKda1EChkt77ZouYAZsapwpMhhh7qJJEgfw",
  "key22": "2GKYNjgMvKBCAt3LLAJqBBTBtAsUw3Ax6sPNE2syM15vNtZ74j8jTR7wrXMzZmPS7Bif1ec8oQ6brVSz3pLJczrF",
  "key23": "4vyEYZQTd7anNLzWu9bsUK96g9mVDwvGcgqz6HFJW2zMtjV1eX6cUPfynWaRWP6JoNNam7pUaMmDqvvpz2r9YsTk",
  "key24": "h3NU3eBNfcUifFGm2dg9UmiFJqfgnt38JMHtXsSH23DEY1Rkm4oRKjPrkJQt2QrSv9u9Ge2wEHty1RTSU5VbhmD",
  "key25": "cRWrxRT1NzNRHQrNqVdTdmD1upKveH37DHLTvtxpzzPkPS9Xc71SYdEGmDHsPunM9J15dVhWf3t2m1xhtrX7GTq"
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
