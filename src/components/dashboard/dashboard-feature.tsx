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
    "uVxg51b3NQ2377iFYH8w4KpFLGpEAsAiGCsy9AUqrFmzeCfnbU9P4t4uETYKowSYKat2iMskGCBizNEJN8jtaz2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kYoBtxe6isaDpe954KZRWSDpmzZawpbULbPCqe4xKDjTvSeCJc2a2inApFscQt4dBczpiNBBub5C4hDQCNMSXkN",
  "key1": "BJi67J6xcVyPEYjKVfnd6oVfoJXRBj2qVxG61SJY13hk7dLAy3fuppczR9TqRpJEUNt39pc1Bax8KtmwTLh1vgy",
  "key2": "3tCe2dFgGfHCPxhoEsr8DuVnZFH4xwTSjcN7JXzrNKTtMW3rL13EN4WdiPVT9Z7ZkE8r4s8KU7b5yqqE5weirS74",
  "key3": "E3BkdaYac2ujH5xWhwXzKMCoB4G376HzdnSafCMyyn7MSrVcfHqoZZ3bL9L7vATjbwwCfpkpaadUToLTnU9vK8W",
  "key4": "msNoUmPP3dYbhWtGxBrSSGUkfPmV2XHrQfN8bk5C9J5aTHHsmzwt8hx4dNYVWJ14cWjGXQGyGnrFDW4Lfi5jERm",
  "key5": "3yrH7QHnuxH1ptmpQMSWo78GVJhPNnPxz4scR7YYn18DVihdfVUK7gf4jdH2SbPMVNY9ov8uu5SpLWNBjiLdbSy7",
  "key6": "22uEVQGfBjQh6wE6vAzRzo7ZvcihUNgJejuC89V8wBL59PyVLrLxRYQQzGJnPQSNZbC98XFJZBJwp1KeiLnx7j3M",
  "key7": "3XuCQFGf214mAmge56VmaZPQQgL9Le53x3fQAEt5fwVzn97vXaCaiJcCQWNGGuAwiEXB5AuSqcR575Ei7CpY8Zu9",
  "key8": "5yHaWJKQL8ghPxNRaYQEyqQp1LjfMGajm29Ni21yxiyoctr6qJGXXF5Qb5UYwKF1zMgWCbskqgnsrxBHPDmHYXr7",
  "key9": "4TEMaatn3BEu9DMAtWdhxcPSEJEgVpTJfsvsyoQtujLpBV6oj7JaijysPWf3kPiyBML6Wkh5mqzcWQzcLqs7hsoo",
  "key10": "4v9bmusMoyP4EmBn3pddUY63XGRMXYg9p5kiVrH7nYSxpPgt5dzRCFP14Y582XGMnHLU4iMMJoqezUuyPDWC3mhr",
  "key11": "67k7SH2M7VsEL9dvzBnREEtyY6g5XRTSsCup1kSFRGTm5E64ZGafxgp1KFoQtxCQQxiwXqqjrAStn4RYEBxtHdVB",
  "key12": "4pPEZ8aZY5iCpwKitwSQUpnecyH6BLaaCmY3Efcn44vNrQT1EcKRtzQdRSpjFGAQPVWzx7dgRoPa7XGChf72c1WD",
  "key13": "5Bx55imRzuB7pmJyoufSP9u9WscpBXy5h54VELBxPJ2UeQW7aeMH1X3KLxgo5krbskZ67VAHR8YjE7ZrdZ3xeyU6",
  "key14": "A5jotU4Rj8JdZfcTMGDdATTPRqZix4ajUdC1FGBqNjkX3CUchqPNmmRX4QqccF1Ro4u6f7V4vFeKpq5FuYyUYvP",
  "key15": "4aq6CKWrm6xZxVY6MTFezKzAJrah9QDKEwkdq9d2LqwgYuis9MaVNyzGju9hhnWM7Z1qt5i8JLBhWCmEBqGngUBX",
  "key16": "4hk5SP1qswnoX2GGdR9Fk8LbJhzo8W2hU17qRvR7ThE5y9JYNanwKKADYUTc5mYM3eqMnQN1fX4syMUQvkb4mCh7",
  "key17": "2bERM2USYyMw3H6Vb5o44dQqUJUoBfupDHUc82N9VkKdoVHsQdKKokPPjngoW4UsRzWP7JGrFyVYBTsW7YZMkxDv",
  "key18": "3YnT2fkWyy7Ur3WCGs9ZN2JkYxN8CAn5A34nV8NVFK9is1iafFYL82oYGvCVtZTYG6rE95ANVdLmbXVEzauaCNoe",
  "key19": "3MK673HtfGNuSZz7Pqwe2tzUHVRHevQoo7DghwWgamgwUPaNn6gFuktmDEPa8PzTLUdtujXXMrtMQYe2ixwQaFQ6",
  "key20": "5jhKGWjL4cdeMA5bsMBgjXzT3PL8EhPQxEm2VRbq57xoMWBYPG7rN6mjA6MX6VtGaZpSpDvps3zHkaYUgpLgzHYY",
  "key21": "3WSWYWMyrzVopeLtmLebXrVcJFH4U3FUo39NmRvfrNfJXsq5uyTjaSdEfyzpsG8oMFHn44VZxbPLoncZHPXKP1Y",
  "key22": "4jpQjo3fGCSNgUiiD5dc8qYhjGRcMeXCY4XbBTnsPLckFTH93brqvh7ARQyVMmuFd2REJEQvDPuMdkWULjA5CqHz",
  "key23": "5jQA4wikn7obr1t4xHkhiKudUDXNEsv7qbsTqYYs26a2BX6qgAb6MrEavx5WphnKdJvMJNfDPEXZXd6Frsp6NJ9q",
  "key24": "NXTVdwheutPK7kFMeR1oUcmnwcBFG3fb5RydVdriRndv6tMB8DMuXVu9tsRivfL17goSnqLwvn4K4hxhUcvWFdi",
  "key25": "5hDtFBq2mGwE9UURG7pWYkaE9xTLVJv65dgWbEF2rfByfvd2VhghEQJmkhuJACaCEqzmbTKkBQhcAxekYPU5YQgK",
  "key26": "42KZWWkmE4n3o91xeUbH9U7aux1qxgBiM1XMs9eNqK2um6xjBMtUx5JF7aUaooM1V7gYbXzjM1AwWP5QJkUMQmht",
  "key27": "5FS7HUsEXP9cLFSXxjBFPiWaLsamTM8KhY63zm9uvwjS3d4aYZpzHJgULwKMF37BnhpJgSTHUec2n8iNkqgwrhXK",
  "key28": "5CebkLBvViCBVmK7ML2SkJTK1TEmAXJuQRpcgtS9h1zcU4B4bP7B5yFhmkpq6wEicrrwyqLyBBv35o2yUSsBRPpi",
  "key29": "38GiaZR4cwfsbCpzxGBszX2WuCSwZU27ZfBuuJicXFENZJZYGnLUQE5iA8e7xRc9KxdmcBMkaPpcZLLvfw9FEUKA"
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
