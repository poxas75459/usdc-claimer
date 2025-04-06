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
    "5911MZDp6MKjzUQp6WQ2y52zwVwp13Z9LVGdt98ovLvg3zS7qXEhEawVJc1VjXKRs7tmbY2fgitmVgqsPyNhG1yi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66bt5L88oEYth3qwaW7ptXoPeC4FSGpZrFK8zzVxyztbdx1FFd4KjxazctWrcc4Lpmg13EkGH6ffVCyUoFjDwPDG",
  "key1": "52D5C3cWaNrtWyGXJqXizmkVgKMMR5ZkMeahwXhipNXhW6E76L4HLX7CTZs4iMVhArZSQWuADKn8mXDPk7g6ZzRA",
  "key2": "4c4QwXVaH4Nk3RraA2hJF2ow38fMgMUAb1M6yV5wE6FfaDRegfneZRuiAj1i84SQ3khgHM2wvncRdyXMs11Bzqif",
  "key3": "2u7K7xXnVHPMbcMQKusP7FvAZ7moZchb1TAPufXvGrdWCXs6R7TFiYZH87w1wSLnSthtBH28xtUCNJqKaGi3on4z",
  "key4": "622FwSv3ttn4WyRZp8MU5WLcjD6o2HCo8LThBD8C6YWD3iDF8AsD2GeMLjMiHGPJGZHEUHyFjLrNXmt5ZmiZ2Zsq",
  "key5": "WUJ4Msb3cFuyz2WBxbKUB6ZTCLmNx3kJKhcfWGfLcjBQCQWkmTRvzZ6eavuFEv5AaUMCwmSMutrc1yvAB3Pg417",
  "key6": "34zjSvTQzTvrM4rnE5HohnEquvryRRvR9cAuqHyUnFXC9DEYhCQhpUwv6hvNMDcPf22Bgc1WXzAz6JRAmPF6gKJs",
  "key7": "29DsffrYFkbPbak3NzHoogfm1fVhmAbp4qLGBRAbenyC5KvjTKJhixJR5sm4gQWZ8TPVRPmff6cPJ3vbgmEw9u93",
  "key8": "4VUmHnKhbSUJ3xQaEUw7dzP9SwjSPpBGkj3XudgXUTgekoRKQ2NSD9Z1CeZzCAXJNZWvAm84jZxeEzKVnMUaqsjH",
  "key9": "4kNZqugrLDcDUDa7Pi2e9QmxMn3JUcHQjJNFUtN8XMwU236FadhruMk5aegf98hK8GhefEF5SW8EYLMsiNmXbSFm",
  "key10": "CLh8m21bFffyoNyHW2ZYVWUM21hRQ5QuxGZc4H3rraXP1Xm3mZYf6MoZ5Dfz2j6FAecBDuZyeCw8XZX7NY89n5A",
  "key11": "3fr9rLqqVwJQWL3NzFG7BfP59zkTC3SDaDNjv4MrLCrnn1qYjQVUFvoNXHCHbzzXQLJDa9QSgbs8LNyaWm9SHtN",
  "key12": "5V2ddAZDqBReaEzkxnE6MMUa1PsDrx8dpZVXjqrZAh9YtJ3FcagydN8NCqCpYHpumayWyjwacXnxBdviShUxrEBa",
  "key13": "21FDwhBMLAxJyoaGUj4TGJ38cqZ3y2XyDqN87bm1UFyuk8UXkWTnRhJJ9fCVeugHjoTiTX83Xgh4Fnfkak5rD4mu",
  "key14": "3ooRd1R3SPe7gMW8aiPYWVr3qdFrt818tpnB9Ld4TJwN1rhJ6AkKTskSgwDsFX6JEttMSx29CeVsxoejZxZxwD6D",
  "key15": "4XK4RmUzzyu7zBhHaVFQikCFmNQRY9gXCcCKKNivWEU2WvfdJKfQFfH2Utoo6np2Ep7HwcWhcNMX5d7GRRtmrbB1",
  "key16": "vCdBVoCT9GS4S2GRmT2b21LMefec1AAm2f4iAnG3M9Rp18XDQTdx69YEETBMuZVBxb7m3CoNtWtvbAXtgz7M15r",
  "key17": "3mGvyPGsxs3PnDgdsDk8bm1ApeMX6oQ5aj7ewgfMuHZ4vUuWpbGVvbWBSNnN92A74tj1oPVJGaQmQrpsrHccXuDW",
  "key18": "3kzGEH8HYES2DhNQnrJW26H1tEqBwaWMLtGYmW9Qcty5ZxZx9QwxHnNizhXUyvpLvp3xYDNDdWMvjEGArJuzqXeq",
  "key19": "3dYiTqkQv7owFaEaCZvNEwzsbi24VnreZjtTjdLqN3nejkkb744ncQBkJzTxAQtk9oXuvipzFRepr68reBbQKiKo",
  "key20": "cF42bLEjHkjmEC1Ahgs65jrcxF2Gm1X2RKpWx46LScrDfk3t4vZPE29zgjN5EJdz6Q4dhnamCaNXzjQFQGbrPhG",
  "key21": "G7NMscrqMRfHXXAgsTPChmvKx24aTXZRf7GMCojD3f7r4r1gczxzC5TLEjPpKuXLYAaV4hamedGFwSErpSGNu44",
  "key22": "4g6RrVE1Hg1GbovTtHwCJ9yaUDYLeNQJCaUBJU6HEBRXiKgeTNWgaSVWmPj3KDeUH8VVqFVhvBshCx3rbjXsH8ZV",
  "key23": "4CafKUza9AYEwsue9S4VR4VgTD8ZUFm7Q9Kd7fCr2pQehKWpzB4fJeDmvQfZAXHEerg5YMTQQW2ymA3LzfcEtc8A",
  "key24": "5E3nWK22XRyqoxBV9h5maKPQjY26qKpE6MsT65TRVfzjqN9KeepQKgEqEYvspW88VUWmrL36FGxbMGsTdj7kwKY6",
  "key25": "5g6dd2wNN4x9sL8BUhVvU3WMFVDVih886mSbJ3s5HoBV2FYmWToZVaaa1NfoA9GubYJysJiZmeCYTBfYvLHjeXS4",
  "key26": "2pmgP4nf7cHBCo6b8qyB1WDUWx3BRRoHNKB545S8wz5USF8SBD7aFfKeo43Je93FQo86aEmkRD5pkA66LyjSmMrU",
  "key27": "3gcJAgT4rjn5d9zJTWbNHMDS8A2wtwhfJTTR13tpJv2MCUR9rYRNcKdbyu4TECML1i8xV7k3yQf1UW8qWEdFNaiV"
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
