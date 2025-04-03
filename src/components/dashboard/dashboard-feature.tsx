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
    "529qd8wPvhGN3wFyywJAosrnXPmYWVj4dXkTS3F7kPiBdLw8cYBHJJ82mpMdpfUKwSkjLSmoLGUeVPfaModXcEef"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c2ZQw4k9R1vJmqLf9WYTT6ijQi5E3n8erXxe4YAZLz57LdqCqAXu6FAq94ieXAqJvLU1WU8Sk9GXgGjLdVKV6J8",
  "key1": "cxNqCifciS1DGXer2krQfEwPMLnsSx6RsMGWd9s1ifL4x84zFQgmHDaZny1peYTzQdujTonLRN2uet7xsp8j94p",
  "key2": "pVjc4zqeeHTuGS8pboYo5NyLKtiD4ZoqZ9vqDgTANd7vcLNnoiLqkJg3gzrEbF83aqVHzT6Tpo5zmTTaQHjXjUH",
  "key3": "3m2o76Rzzwq9h9mC9WFEtmaDTZjBmvWWkGduZThmPi3KPukah3XvaRCbcEAwryFbKbQqfASp4bTaecYCQycT7aX6",
  "key4": "8vMsqQesD1ALUFLDGHkmEaWMoMEqkFXvJR3eQFSgqVKiuQy2J8JZfpxQZ26sg2cj4ryurUE6ey4fNEE3qMKwtG2",
  "key5": "qsVpgcpKozAkeBHfEtgFeKQTx4VAGcJQa15Gc68mH1GQT1FZthT2MqU1x5RUEXsaycHPGhrDhoUaZgrvZL1V1UH",
  "key6": "5SEuSXff8YQb6ZW2o5kbH3G2FNQzdFrSy3yhZYizFD3MeRZJAHTnXtx1HiWiA3bXC35PpKcVvJpvAwxasp9kMCzL",
  "key7": "2mkxx5waaaMFaCr5r26G4jLZQToENi3XGUXTbYHKMzV3X8itTYiyrnEaKmrXeAriLsfgJS51gGLnVDKQ18w6vUyh",
  "key8": "5W7Zgz2HhMcmCwND1tUfR9mS6xbxD2PKHYWRkkuc66JtyHCRTU4KNnixmUk9kRpW1869SBEnkWLVTgDbDUspHbWz",
  "key9": "63EaVzrzG2jo6CGuw7Af6mAq1Q7fAnDKmiQkZUNM27tvV51eP4uUY3z1i5dKVpSfdxrc5dDF5zxNJHKe9u7QfH89",
  "key10": "2A8JUNETdvSxGYMWLHKn9DPQeG96NRHeZZeriUkrBGYadrTvvvTvLAyH8Uoh5YTEP5Ej8kpXWELF4NXk4B33Beow",
  "key11": "4tTgueceiDA9F8CBV797a6yi6XhjP1wsFymty8QsAF36zLeAw7kryXsjxyN2YBr7i6LbrPN8Qh2cdtKhUbftC9zy",
  "key12": "BVcVPLvANcrqFm9hvX1WBVsFMezXgpwu67ZbM8qMyec7njT7i1MUEBZeLpdmz5dRuu4ARp3Hnn5aoFAj1yLMRHH",
  "key13": "8aEeQr5E2nMoPB85vDFC5nGdsF4WYBM3A34C5d5wkGUZ95JXKfKyZUP1VGNYP9tStmw7MRLCqYup3vSpaYVe41S",
  "key14": "5YLH2skaQDGCQiY5PCQcpFQ356XgKr6jkcKtKRprJAM6KVbHKAsTNujqzrhNxezQSvMG1ZT1UNsM28MoM1mzZ6E1",
  "key15": "3poEYd5fJTPuLRSGXZ2eiG5JokK6kjLSbu3Q1w4nqs7VKztw9PbBpAB89kY8SeaZPyUwHPcV7fuwAmrsqFp4W9jj",
  "key16": "LfhvncLi9xUnpdY1dNsHobMrXqCaQ6JRjYL7V6yBSdxKTLjDPRkB9ByLrLmtDLEg7oMScXokxR2pkaazTaex46W",
  "key17": "KpPgCrmWY7RutRsLTcgKB5YupZWHAXimWep2FAvs2o21tDFpk3FgJStonbvfQTWir2gYKSPAdesQ39WitTD4QMg",
  "key18": "3eLuQkZaVvMhGKrTxEeKu3V4DDkYr2TxA13fxYmrcx5A55kRhqm46QAyxd2r48YwQhDjah6xwCrDyocnLxzC3oSH",
  "key19": "48pc8Lgjo9PBL1sE5vmsGuowf5Hk7gRv3UNLNViRnoYrMv6E1ryG9G8wTuAXhygZuQczeoUNwjx45GhsDGAQwdss",
  "key20": "4NNe3hvnWYvDSM1DwrXVqu74KJY72zf1fbmX4Gf3jcaDqd6nF6rkHPkPmVXodYSASLev7VcEM4vYaKUgR5CYt5Hh",
  "key21": "C1fEkx9vpLe3BZhzuzNVoDFWbpkTkq9tjsnaXymrnusyU3y1WQ9HJmmKBruoVSkFipVDZdqyAFszJc4k9CCoV5Z",
  "key22": "zWdS5TP7FSNLFXGwXPAN7ucfhBGKzD2BGsE346dXNgVF3jmb6e1tdb9Hv38ssEHrVqHvuq4KJP1rQJHSbUZxUSa",
  "key23": "aVPC15Qba8WvRHGLsnUAZvM262fng1eCvPVuiTxwf7vebJtxRSbzjXTVWWZhEbciCenxRbf2vTFC3tdZC6udriR",
  "key24": "4yRgoWcQMjTY2uTN9V53AzoKY92WrvkprutigJAod8REUeLqAkDvZ39ntLJm9k47jLxYD5pfvYaFtQCRciaxdX8Z",
  "key25": "2iKf3EktRPwfHxrjgnt6Q2mxUigJ4mRqYeyrHEm3SKN7TapZzqobR2rCG7yhXF2wMRE6EKrf79HUhRFpPxpuUF1a",
  "key26": "5Exy1hJZzYdrKe1ZAoLxdpcPpGYHATexdNhkFQgwxr66B1KRsrzAvY64FjtoJXrFfWMHRifeWFvJoGaNZoAvzQeP"
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
