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
    "62KjQ8wv4QcrKsovUj4LUWy1k7UpYNefjpdn1Te3gnLL5Wi44DFUnYjpADf3SWc8xj7TwKAptb6jqz9N1bFEMKDP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bikeoQB81Eruai6yML64qUHYu6zAAoUv6jsxi3sJGxaJZcaavARSnNbkGbYQH2yvKrhjP7kFo6dASUBGXJV52sW",
  "key1": "2CGisTQN6JYVELCh3nxQ6PcVLwcCDQBDBHusjV5StWqV1Kfu941Woahy26NhGkynFhigm9XtYwFopiZQsfzEWPfd",
  "key2": "AbaYZv1crCBc3o1XRokH23F9jWJhPj84tuN7p3G8eWQwYNKg9YvDCxj3a53RVnZk738JsZojLER1qo6yaBCC9if",
  "key3": "2XdR5t7vZuLvPNziJXkr4q8LHPxAi8DScZQfPuPRGJy6i1uve81vhypAWT3a93KNKDkHLeFnLfvEtCjDar1XJkW",
  "key4": "3uoRA2QCPbm1rxHDPsqLzoMQmnvjqmPiACCEHft8ZHFqWuXZtiGiDHPeFFuZG1La1GxPYrZGQwK5Aujt1zxrQh7T",
  "key5": "2bCSdruDZqsNk76aNKryHTRcktCP9bmocQiE18zBd6CxDeKgN544um7nFNKjiAfpcXLvAJbBNF9SJmy2eWTdM7Qi",
  "key6": "2bTiHemAb724FsjbA1ZinaqoNBenh6yQLS4pMUdwqjz8LzXQewMV3qNENXJdnSUvz3ErwGfn2iqZYSLt7mf5nGte",
  "key7": "4YNbVE6TMQxrDuAthqEP3GmbWBNoaAaPuKdqCv8QtEAgQFRxhYfm9MjZF71oLznmNLeYgq3PL5oMByw6rSnd2vNx",
  "key8": "3fCe1oQEpaEh1HsYRFQgdGqMcBzooEa1UiU1BcjhdiFn9sZzxGJJejQ71aFgdLbEFxGjWwjUaXQJLjnfGNZiaUGa",
  "key9": "sxtAtnWgnBairPhzYdRBiJfRA15XaMj8m1T5PBCzHbCj4SMzF4KXeWfuJ8LJpUauEi6rrLPFjdCevdg2xewerNb",
  "key10": "4ikXXZFSAR7u81CC38WpSuSPNmyKtnQ1nkLD5bY5M2qmfbsZz4sFg68WBuLvt2jDyJTzVYZmBXFkhQGo8YDS6fQF",
  "key11": "2yguNaFNKhbYwN634mJE7LmG61D5Yxzpsfnd7GGGy3AV4k9KQjndUYJTHbPCkuqQLB7pJufSEgR7nf47oyoqaV2Z",
  "key12": "2LoTGN2b94gCmLw5ruySarpwmvd2W1BHsekd3jFjDujfD56hRqPWgh4zMGM7edAWmZ4o7SsZ3VLfaqDknayjmdZ7",
  "key13": "4iUwqQa2fNLcwevpnAS7bb3Bcp1A3xTDMwQAUfcNrFWZuU6iwZDQvfDrm23aghjUDRfh9DCYScUVpBLpV39GJJXH",
  "key14": "yQv2Eg3KQLDAFQnCAxTFqN1FsqqA5BFFGxY4ojwFWknRLgpnn8etNEuXfcdB9MZCaDUcqdewYySAkYA6N2T8JZb",
  "key15": "4PUVi48gWah7QYuaS7ZNfPRcjVKrML5ynnD5byVGXMecNejRiXS54p37zPG8EgmYysVW96JvRCwWNqqyHKcaVdnn",
  "key16": "39xBW9izPGTh1FLcBdbBWkR66kgNkoj3znxmoQBSrAR81pvXSLfqWztHw8nxMjLTn2t38hCKb5tHyNx7Gdigoyyr",
  "key17": "5Bg17b3UXoEDHjq2Ebr3HXX9xk5BJWwutoRh65Rw9wP3gHmqXidzn97HsxVa6mgaMoFj8mJQ229YsFKZh8u34SSF",
  "key18": "Vpf5p93ftRD8A1VvaHUJ3AD7aPNRSggQTP4ZTbaPMyNoKhjVWTHJSnEJuRpaBsdfimuGUyh4cT8rnZd49yMs9rN",
  "key19": "2PAotJVgea9Z9qx2RyvBhS5mVNxM7vZmqeNr5EywrrJwzo7wNXPKZHHnzTN9csjaTxduxTkpDiqrgHp8od76eugQ",
  "key20": "2EZmvcowcaHbsvUBGEQR8yM2PT7ZiN4xrjX5pqssty5sLvtzZSKeN21PAMGuoD81d9agL1taHLutdnLnCWJXzCPD",
  "key21": "2pktcQ6a2Awao7P8yHEUEzL7Lqrvnvc8NiCMDXspTzXGTRmkay1kxcQeLuH6zHqdMRDy1VVDCLZPQwPf3GvSCj81",
  "key22": "3zSZZzkaR5hx2ng7YnNUqeYGUxG6DJrd5xroxVnzqXgKdJxBaLyAREKYsPmeb5onsd4kVHosWLrPePuZQcF67GVg",
  "key23": "4XhDGpNNJL4JxGd3J4ben1bPh7SGgY1tC6kWJnsv9MEkc42dgAFPJEc2vpfFe5LJL5NSRqti5WrhX7Uda4JxqG28",
  "key24": "4VTW5cafN1kQgSN9jsWB4Q8Lh8pypeoKKAsEde5zjFHsmQEWpDSw9Lk2itNxf5cx85SxAxuLT9hopyShhgvGDz6A",
  "key25": "2y7C7Hnsaj3BhBsoyP4ZyHCLiYHStqTkZHzfEzMU2ohU1M7FxhKCkbqdv6o2QSSSGnp3APjnN6DcyACsavRG35t6",
  "key26": "5vJjppVMPZVMVpEL65CTDNrdPC71b86P8QYzhJEkxyNpBdixJuHf8PbDmo2iAVJ7QdgCZ9CubBFyD3kpDuuD2Rp2",
  "key27": "9Dzx2DacaKoiz1vU8izi9zDztqE2UJJD2tJuhuby9NdxHb1iiJHdYQuyuDUQ9z1oGELFKvxExDosjLg68eQBC4T"
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
