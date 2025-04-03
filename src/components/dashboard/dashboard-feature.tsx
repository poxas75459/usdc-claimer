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
    "3FBqHbrQPHxkWqvTH5h4JSwPR7L587Ab58b8EnUegv4tcmBKrX7EYM91NxdbJcBZY63XUX91eXGXnV1oGoTFPqEH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RsQdKQ8QWqNX2rgs2y14oiFDm5xg1eDzKaxMtRU1sdA19zu3KKnKXE6H4NByCwmS3jFccvhjDYY543MVGJPo8Ny",
  "key1": "5KyA2mRsgdBWjGCmfSp18VVaAt1atuSzbviGrmicftUmPSPhLsdk96vbS6A5QFuJXZwu7CTZBaGfEKByTUC55CjE",
  "key2": "4hBNS1tSKthUBdain2D4jiXJzpQLE9kH1dQ4HmxGkeiK2ComW8bH79j2eZtCGUPUGYVvE8zQ6tyCmqdvkX4igJuJ",
  "key3": "Vi5m6cAFu66sYnMQCoXDf9hjciFXdJm9k6b2BBfaoj7at7cHTs8QuGkakhf8p4Cfgx5gnSbxFiGtg3WhMHfhqY9",
  "key4": "5H35B9dJZyEvmUWvun9btjnTCrSa3iFhJFLkhroVnHiYoHrDZ8xhnkcgzwFhZS8ZWxy1rPkRfWXzNknC2AAo8DZV",
  "key5": "3N8XysztokVFxNbfkhRj8s3h8qfGaSAb8sDWdN4ujfDTrwSSMrBAfaRf6TCPFPdUHUzt1rJmvDMA1pz1yCVbwDWJ",
  "key6": "664cpb5Pc2pgNkSZ9J3wmPeC5esJPTcMndzms9YVGCx73PrpBxeZXb9PWinwoN9eyrVFTasgxmvVNsgDwSjxuiqQ",
  "key7": "4DQe3G83n9iVU4SbbgD3dxjegtk11sEyW54JTEqCUasrELnNkJadE7QDCS23x1qwynND1GRDKR9ektpatrquNcaq",
  "key8": "55JxPEsHKHJvQhSLhiqe4cNoWA23SayXPJ14nH9QPJhbqk5DhSoNr6cK2PDjW8Mm6mtB9RMM1AzC9tQU7J9sXN7W",
  "key9": "2DB31vi3qB14yqasBEuWFwirWxHh3er7EcF8xwko8rfhx4ZGcZ61gzZYaCgxxmzBT1GWfdJtJDRY15yJcvPM7QQu",
  "key10": "485PP2EfFRoN3XxNdmkNt6JGdPVKz3U6snZQZr8crSpE8GbfBuho6Ew1SxzePrQf9FmhdC2DkSHezYbZzHQcjMqe",
  "key11": "5xzoU4CagtudW9dUa29QKhWjFqSxfRwE9Hdmhyy5Uh18rJRMgQDG2aiKxnkqpF22Kr1aSERfxYkZeTvfc1uAiNQF",
  "key12": "xKxMLYrk96PHdqR4m7oFqVRzeA3QU2xTQnwTTBmAsUjtJWWkonbkYMBtoKHw94Rp1nX1yWK5fyvzgczx7uV5uW7",
  "key13": "5LDVHU1ywuBBRtPtLR5DgB5ZSk9JQkEznAuHwBwP25HiAVMorW4nDky5jGZTYXqKPHWJDpj7XrWB6SzL2PMWSBZz",
  "key14": "2Udsy9gA5J6RbgkkFxF2JMojzUqwCj6tznEtbqchKvEfbAjYDMHzpziEFJXdm3TKu4K3aea5z9Dx3hscESX7kR25",
  "key15": "2JXSYk2wXBC2dJCUKfubuusRpzrtFz7rcurmzaFRWghGs42c48D5f19vam5PrnXa5JWgpNQqAxuT5vAizXjZizcd",
  "key16": "3YJmtun9Qzz6idjGJ7gPVKbDXKtT8stHLsq1CXR4bzxUsGDkVF2E5q9ynXZiab3hJXdURhVks9NDdj81p5R8qn7n",
  "key17": "rQLFGXpNt5oMc2TRUzePuukD2pL1vQCLCCxD6TuQ4rmT3vHGB2FKuT1rf6KLFw9NJhmxLd3NwydWWQ8GnMyiGH9",
  "key18": "2VaNAxnme6xPdV11uoAszSryyhXKj5GwhdEvup8DkzKY4Eb3FdeCAmYERg8jZGq6MC1o5yhFfZKTDbpmLmYmh23v",
  "key19": "3w5d18Rsud4wzkySH9JAa4UownXy9sTLM8v9HQAoF7GGrLUzdpRBgCwZ1ur3KZ4G22qd4wEenjVPLVtUnq9fHdHR",
  "key20": "44aQXd5UpseW3PqMVRqcqxyuN3tUYNteccCaka1xpm8PmhwNPDCX15ABVRrv4NUwDM15FLXMmH8kjTea6hPa4S9V",
  "key21": "3PkMTfoPcSB4zyyWftyDysa9ahHWmzX2Kd8saak3L63MeZijGAMy673tLDtkikda41Qd8fTrGzCfKtnx3MAUPJK1",
  "key22": "38yAJq3KxtYyn7LvByx4yu8iaqm3hz9dTWYnrBpcRZBcg3ir6BoaqP5KRsNsVWTUvgJu44GqUsMfvRGixDqLxAti",
  "key23": "3YDrvAbitHsT5xheqRQRd7Pa8YCj9hPqjpYUxMrpA7CuwzLdc5EHjPu9hwWjSpQhqxMRrXqT34vSUYg1VycfhvUH",
  "key24": "tTyjhQEJJrgedVkywAMrvmPWP4qVLR3GhSjidvkVySM4G6zRDCjPy1hzvrq4Xxanq1tN4EiUAXeuYKDNfYMYdVA",
  "key25": "2gmiPonGRArneQUjechFxnHkgcwzdwZQKqyEyP6x8YcC6iSVR5AtoneVxx5Tzfq1MjA2X9p4RaSbbe1UryE2ZYQo",
  "key26": "5Y1fNhqshG2EMwee9g6UwcmhHmh5GaYj62D8YQDRpweKPnPCJv8ynGWiSCqSVXKfHkRRwE6i3uxbFDrqgM4JkrUP",
  "key27": "5R6MQw5Sn1s7Ccu7DoeBuMhbn4GaWFNX1J7QvFYcw6JxmppsrP8L2AK8ZTaGS2csYuh7HP2zWExjNw6Pb5pHP7Wz",
  "key28": "5TuKB4uCZaV3eHeLHkhi6tLUZgwKcmAoPPfC54Lya8xdsSejzd2CUqWoThyzAWqA6mSkpFfCaBgjHnCvPkQXM64k",
  "key29": "5VsFjZeznRjA8nyiMytXucb9akgNruceNnPgB1Ddca2uXbEaLGCfVqzQJxJETKVCg4nYYrr1nTcHt26jS7j7mWCK",
  "key30": "4PWLguQFUnu9CnKq1vksEwugtWjRbaLMyxksYdfNuxJACbBWxMWBE1FANmFYC3ZTXJmAafwNoUqN92BjFXKzbeXb",
  "key31": "2L5foVAnGXMeUCAY7RmThvF6nx8qiaU5aHkAKmSaCYgi1BZjURge86Gkd3xy5pLhKNxd8XnSzfqYJmp6LMLiVaRs",
  "key32": "2dF6A3VzSXAcLyPQRBmyjj2mHdM3HHVj4wYCQKJPy8Sd6XasMSnZNs1KcZR5okizDemvPjKonwJBxFuxpERfoKSP",
  "key33": "GjQeCURd78D9AnqrjobX8M4qK33Vs4uzZjGkxREjQRHztwdSj2P6cLUnT7J7m586WkGbrVX2gk3EANncAkvBTp8",
  "key34": "x5pBKtc4AsK9iBXcWjWfSkSzcyfkpYHjfupLz54uJeQXG6HpB7Doh8i1qpSmUhJ2LUdY8JES3TyECsgGmE2k3N2",
  "key35": "3CTp6jLPbt6EUEc811VfpCAsAKtojRZfKDjB74QczjsxU6Qiq3gGJs7gny6k4J8pzBgJakxmaEfAhfFwAHQx3tQu",
  "key36": "4jJU1dR1csDnAFY5T9aSjodKr8tM5B9MAoM7V7riG2knxfiXPJJgu2VNMmuBw5pf4sS2s5AFCcr29XdCVFSanPYw",
  "key37": "4fyTRCzKbuEHMgWZzXhk1NZxBaZabE8BSpEGxj8ck6t17gNBKingXrVvGA9sraPX6v839vwNgPTsWTk3gzCcBbpm",
  "key38": "3WPBEZiwxXPikmoRh7b8vsGaFVjPCL8zh29DfM6PwUUCyKHQTBn41UGLCV2wnZmeDaiBEpm1HbE8iLyyEe5TJ2nX",
  "key39": "5YmKivVR3d5sXVP4yuox9vrAqshvtCArJsLaKVP9Vev2Rg9bsF9A9DyJUcydWa8pHSnpqVohK3mhCsTWeBjqkhBa",
  "key40": "4CjSibRv15Ysz4zaabQJHDF6Ao8vkyCt8Q5Ak64sArVJr1YPBi4jqVjzVQjc8duUcwtJREs8DxPGtrbrLt6rSYUu",
  "key41": "2zkwLZrcKNycBEZ7bYZrFRB9KYL233obEBG2WRk2zKXYfAzE6r1uso2ZibkteBN8FXfYzAFBruCDkrLRm8Uev4xm",
  "key42": "vgroiqht4Cw1fZHEmEhzMgMkE1PTTbhjeheSirf2NC36QUcjEMZwq6qAwCCHE2snP7W7rTeXtJNEW5WfyUUc6w3",
  "key43": "2fgTeviu4MVoR8RSRiAV2NbDttoruxkFcCm6K4HmLqPRRaRKq7pb2vgDPaYzQG7XhHcxvUfxyrXBneZDfad4GjeH",
  "key44": "2JwTkKjA39M8MjZFa4tKrjVyVfT7H3Vxon7ihHkdNEHPgpBhwPeRwhgurf3kdS1kR1d4t6L9cJ1f7fLESQE8XYmE"
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
