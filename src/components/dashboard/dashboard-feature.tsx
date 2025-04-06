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
    "5EXS1Yh82fkT6WjquDZCKtXn5NEDxv1iRCofjqecMcqhBuWDMzaUvRM2naxngR2a7n5aceQLQ4GNwLeCos7G2SaD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CZSjvuRYnG8u5rnDcvsXMURxCMqpK9f8RhfXd9tVDqFoBXWFJcjDjQcAW3GjNa54SN79vZHS8ukG719nn9qazEM",
  "key1": "5jfv4VV39m7mm2BdRrm4k3WXouPpcU69Ho1azXaGZXSo8vG9hM9PPHgaPPHxY9CTZoDBgm3uiFd5Vx9WtuxhHnoa",
  "key2": "3CW6ZRX38jfc8Y5j5Kr8viG71urponVrTsUsAVb2SNp1tZKHydYJnCZq4wFw5deUpeBDLMG3z9UKsLKprFmPqC9H",
  "key3": "2jV29287utT1skefTx3uJq1aoLQug9CGVe2cuRE33L7fPDvA6tNd1cmh9NGrzMpFiKuPQD6aKw62ngRtJmnzJJ7Y",
  "key4": "2HyrTXx3WvgwQEyzk3KJ9LSb98G68bBomKc9AKWcqbh3W7L2DMfAnGW5Zxq98by3DJHN5t2erj9hXfGEG9KU9V3i",
  "key5": "RqR9SoZuZx4X8vBcqUH5A6zbrjXmvpauKW5hHtdcqL4PMHiCfNKLouS3kHzR5mVzwXb1GcS1w5Jmu6UWkq9jgFQ",
  "key6": "41UEd4ZByshvpfZS1Q6UyM2DBks699wD6yhtMLFRki1nDuY6QC66gXineExZL7ETyMpMMphpa15PRq9dJKh92TtU",
  "key7": "Agz2U3nGkR762YeTTsPxwztYNo3QeH2PcovFxSNj3sgzQ7jLFg5Wx2hjCEcuP1KS9Tfun2dbRKgxtzn74VwAJFW",
  "key8": "38ambxZWEgYZpnKy7g7zHufms6euSdQpTjT8vRTH84vx6tQ3HNhgTkbV9V9kEZmiMXYeMb74kg8QmZqzScd3TkXT",
  "key9": "3MECDSiM3ERcNgvLNsgGAySmH3AXzK2YZEU4mG7zkj8s6GcLx4gZkmErK5dNQ9yCbjoRJfvRdrxVgAAxgyhr8JY9",
  "key10": "4UN41Q6uEDLK2Cze4G1DLmb5WkXVRAWXpHzdHJtpCj71WNy6j3c6u3CxAfqzVgtVg8X2dGBbEnvCpntESe12taBK",
  "key11": "5JpTqF2hARYPeC29kmt97oKtTUMmQ6bLwGvhb5k8oyWnFbxCSP9CBxbV6LeHF94BUEwSGH3W7CCpVNyT3BxrVaJk",
  "key12": "3P3chNNznUE4d5uhAHoVq3LMmAHrSfjng9B2oZZY2UiegK5psP5UQ3hpUzr67vyUzUXhFtjtF4uV6zM2AmsYKmdL",
  "key13": "2PvUrq9ePg3n1TMChSuXoxBZGm29VTjXEE343i28W1c5vCmCr5983xsmp1YUoNd6Xt3qi5pB7uPAcrsPzA9QbzMk",
  "key14": "3tDfjZzuoAh6urSWWeDFENgc5t22uNaxpaEa5g6qccn8Tb3iGVEbucx8fhAXqbrXX8JXzwB3Hjrz1pC18qFerCip",
  "key15": "egKKAEKxpFBCGmRDWuoMaFt6SvFyqAWB3CUf99NVYieSkXKNYZFBhcTaSxhzN2wKE5R1VE8TykwqzgP4ea74VBh",
  "key16": "KQZ31D819L1xaDsms6eL98Ew9LG8VCRRXKfheSQ1gfVnVaGeDo8ZH5kVUPekUvLqTVfqprHeKohf1gT5T2bMmd9",
  "key17": "3u5VPzM9Dtqc9GDqW8BAqUrx6D3cWRxwhL23CaBFoyNVo4qUUmLwNyWEfmWLphzvfmwDRKDKomFjmHM95q8vYuA2",
  "key18": "229f3Z3SMvjMPdp2QHSYrJHP8JswTdvcChFPxSJvCXevnWJ8xm8emqhSju35rhftMpWwjouGw27dTdtP1emSCrNM",
  "key19": "2AgpuB2Tv35K8JGJzLAW7DUYNm8KztrU8ix7qmuRAHDGfVk1DVwnkFS3XtPGAFjBvUhfD6ui8DFXQ5EAK8JZN1Tf",
  "key20": "3j5n5XsAqijp9zsa3LtocaXFYA2VFof8xSoCEDcaQebXGb5bJx7FQ973i2kyL4ojmVc4XvyQVYaSkDu668geHVek",
  "key21": "3UM8MaACu25bEpnVDNQjCo4QZzr7ARcWrn2eKZNaaeadoefvYMUC5kztHNdbrKsMmgUKSD9x8BpD4nWGE1vzZigD",
  "key22": "23vN3pUDfQxBL7x6oRH67oH7euDeEYvFevz6GRScjViRMYvZjCHMvB25KauskAP2LtdDcbAEvBojkvh5qzzsjNkL",
  "key23": "66zNemTcZ7j5rNNBdqcRXQe94Kow4ztK6R2FVfbE5avzxmqgRAC6UzxbamENW2shi5EVHsFqekF7FGu3sTXDqNJ8",
  "key24": "61GxpxDGjBjkxZCHr8tB1uwpisR5yi1gdJQ9C5i2gYczdL434SUwAJBPQNmYGh4Te8fc7je86zQ6pqyNfft42eCt",
  "key25": "4FLp5499QS697sEWJtW4VehbZtk3DWBPTQ4PZaEZ7SLkTn9RVpgjEgZPKQSSnXsnEAtoB14TKguAM3LmQ8w5jDJo"
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
