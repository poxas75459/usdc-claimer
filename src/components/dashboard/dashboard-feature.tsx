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
    "5muuvgEnTnLCdwWBR5AuKSCEU9SauSGDjtuaYzjGQBc1FXoQ3pkDRdAdRnfPYf7ak1wdRRKG4Km7627Zm3joieGE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hzUHrokS2EBFRaaWo3iPazrertaYaDcdXZkssgJao1tZjKHcqoaHzU23GmBNZZGxTNUCUbD3gqMp9jQtjhUZnFA",
  "key1": "2irRUsUyviFyv2JxeoKzeYBQXDrFf87XnUZfUuivp5fVSEVbMMeSfVHwA6ZZGkBbpjfHgrzKks8ZHvm7LeKxZMyu",
  "key2": "2TQqcg5VuJSHPLRMQgqq3Rcoakej3a7L9S6FkMKiNpzbqJpT6V3DT6NW4i47AUigpnACYRBqtgY84pPaXAMfzDN1",
  "key3": "THB7561fdwr8ar67w5KhgaqRqND6v6uvbUTtTnZP7GYRiNNmem5Q55TpX61mCHThHxxe21XfSt6PLETgKcreXpp",
  "key4": "2H881hwdJUjpJJjjKz85wRCi9QbZeHCKGaYzyAv6ZgVNaDr7DL7aXVjuFTLEgabdbwUj2QzEGZT4VeiWriT1pNWz",
  "key5": "3RQN38MfWuZh14Roi6Abte8TmiBEjN4L1HLJM12gTAZHfkM2xxWJd5ibe4zYvz5qkwqLbYJLMfWs8TJ9bNpJKYid",
  "key6": "2WKoZ1S7ZtELNXq7BuVxzAs5bEsPSoeLXCB6nvBVq2J546enoe7MBS63QNWEJCvhW2CnhRA41KP5v7XyMq5Ee1be",
  "key7": "PpkwP3jwBgsZzyFTZx9KP1Dpy7JAxL1YdgPKd3dtcjPK8m8Cuji6kqeR3XG5WavZ4MrZZvDNe9g6zXVC7SFyx6q",
  "key8": "65U8jukfWTHHCHgMy1hGwKfQ55CyUemDQpCxKJQB55n4NBjAvs5uZj5hnsGPqpMbf4GUfeMbQYvYrWsDFTX111LR",
  "key9": "4aVRfVX5D3kD1T9LhzDfSZ62fXoDQnPnqSnZJgwZz1fop6C2xQURW3bMUVYdEecBxQ9MhEKyrokyLrZzoBWKCYbL",
  "key10": "vKSwfANZDh6uE1zW8RvGJYw2C2gHvz9487ouNgHFeHVzyUozjfecA14L9ZpFfuRaK9eaBJ3WcWwM3VNMPyAAeFV",
  "key11": "3A7mPm6pkZYbNPAaQ4ZN8qrTnRbW5QiDn8MhqWjLpyLGe2ETEjRpjg7ZUFabbKef1DyDJfcdhTwTZuyvJhzcsmWx",
  "key12": "2ufc5CjCqDanofouK1wtAs29BuGTSnYi2pBnCUsjKdEbsAjx9TJ2XXybP8da9miuVcTkSJxnrZ9w3zUp3pzWm6XR",
  "key13": "4bWie83CTCTpMuoiBsZ8MRxs92V6RpPBV7PdNqbABMTBZ5Mc1cHycrKypUQh1BcadhTN1yEDPpFv4QRh83VSH9gz",
  "key14": "5Ns83RcpyB8vAoJ7C7pginxaNNCMH2VhJwPjCVz2nQfDC7yh25jhkReqxs6Ji1wWokXSbX1zqQaBXBgkn2SKbumT",
  "key15": "5ydhGyvYi4fU8u8rN75qJzDDroCQUrrs5h9pnvSdPGDHsEeaFPbn8TCvHBJPw9SRxRYv2PPxfM6mvkkB9Hq9Hdk",
  "key16": "4wf9WBnyJoKNiTrHtxkrrFKBUcYqh1QUJrBoFKHmdvKCLioaH7quUrjy4pifg1dEGhztyHfeWhehsFyR7ogeBabS",
  "key17": "2vasQcXyZqHoVBsTB413THSKu2hpE2Ef2qJuWEtdoBEVSD1S4YW13VsrCGgamg8Y6fTCJCpuDQRY6PPhWQXmi69C",
  "key18": "3W8J3skqEEA2bsqh7tZLFftv4pBZ8GmEqwcjEArKoXiahrHdz5DAQXhFEKbAFVPfgx1TpKRdbL6ToJ3V1Ac6D3rZ",
  "key19": "vwPcRfqatowt3JMQ9pgszgDe6yqn5mqwwekLrhvnfTFdotMbr1LBL5t5dardcekSe7qSfd7QHzKBWfCmy4vWthp",
  "key20": "5Yx2yjwDzrnwnjNpD8NwtLhJBPRAPu95yhNW4d25v1WigNQWyosUW5nU7nbYA87R58CrWmkvNCE8kKkSp5kMoFnF",
  "key21": "5a9dST7ij3iAEtxhEHF9PANzesGqR7KyFrm4gYd5MWX86iZaBKGztkKgUD2KqHqfJzMt6eB1SeCHqKAy9PzrjihP",
  "key22": "2xUspAfVHtYEaBhtU4wLrbyAKXAVp6Vd5MeSDGwK2iUFvHeD7dWSEJeMdyJfmWv6S5gCiZoEwq8WEFhgBvsKqFLf",
  "key23": "648NpcmXue2Z4fgFnjHtcNFktNdkKuWr4Cdr7YxE4hHBGwvp1kNrZCVLSgtvLrTodNf1wJGpM4AwqEUJmcJ1DnG7",
  "key24": "2NLpXUgP7W6hCiuxjGPRAxEo4fjg1hp31t8CaJAsuW8g9bJcQJaz6XMypdDJqFwz7aPp4BxHx9kx7MnP5uY7f3vy",
  "key25": "yHzbAo5WD5pRsdC3jkfo8objYxUqXbTFAibdvgtWAVD1UQ3n7XMkvGqnYYh2sGSJztycr1VsvVf4sDPziP9YnQp",
  "key26": "2gJdrpEas6rnSFLukWtNXqTRvwvzqopc7GazZYSkfLdDZGDbqNHFfCxDo9x8neGJAyfZtYJnxHtvYwpRfiqbrWyK",
  "key27": "5jjdbY3xUuXZ9b3gEwy9GzcKnK6dapP55MHVukxVhzo9XFX5JxZEJ1jxcJLZz7E5TMHxYpWDhjPQmWvxsM6tTr5F",
  "key28": "4ponTvHMS3hBX2L66DuRxv8jukxQRmpbHKiZeUTXJJRpSsRoCSXM751XhnWTT2SrU8bMQ2gVcyVfoEifKhcZ4Hms",
  "key29": "4b9xt1CpbPTUft4Qumenn7TWU8a3WLAoETXR7Nm729YULXmPMPzXthELnN13Jt1jscZVmBTptisDk9Rhp2ccK85H",
  "key30": "5X3H3cakAfWdY5HqB7u9dPeaAdFM9Gt8h28HyC69nwbV2FbQy2hvX3ZraUodGZzXjsMiDu9QaTMRWaHJ9fMTERRW",
  "key31": "5xRcTjcQbFpKXqJQJJwg3fx5CwkbQbUjNhmyFKNU4RJrPQpFYK8VsXZKRxqEz6nbLJXokeCPj5djRrxoxf3rrU6"
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
