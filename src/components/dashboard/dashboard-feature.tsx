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
    "4f7urgLWP2FHHEhAJj5rxZGc9kx5PfMwnmCckbDvfjJEvWBzXY3K1YzaL3qx5frcL3cV6JwhghjNkps7bgxnNyHZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ah98v8br7dBNE668kiPQxWEHyxxRfdDYA4Mbv6pX85ery8UCMcr8YaABVMCSqNBEe6diWEU6bBQL3zsbY3n56kX",
  "key1": "24RFA7v863mrBH6WyVRBX7GFjJ45gci63S5U6vc1h7usrd91iy275mrsmVgLCYKPmwi1cbfPnWXHvx6QXL1wfDwD",
  "key2": "28BwzWq7SBf3Co2kskk1unrLiHQPq6HfzsgAm1crTWgeG5Va9ZSUByZNvqnvB7KUTTWMyo5zurkBmeo93WZxjsAU",
  "key3": "VfXDcmbUhBSaPYM9zhCtd9U2Ekoqe8Dt8y1kQjPEKYdsnSfaheBX33HP8ZC2xuEnNV2nVCqpsJtpV8NMADJQ9gY",
  "key4": "34QupYheVWbABefdFQTwMpojGLxWbwQuZBp4MX3zzbrwwGQCvvREbXDcsnMtwqyi8wtmo1DahKiwj9qAKYQuAjhZ",
  "key5": "5XhtypSP48cJFbo8bwavUuUQK1agB6RXhqPicJG4etVQ6gLXa3sFVzvGLjzYMHrr3yRnrKmjmKrFiDitxfw5KNJm",
  "key6": "3N9X4DpnoUhDXsGkGAc2B5ja54bsdst7tpTNJZTTLfJwGithPZXLPYGbzgWF9W6VdX8XbqcuVJMtvQADZkz6yo2L",
  "key7": "39s6cZJFhVtGUYD6gRonVHysakVPc2ncPXpdAhs7hZwGGrhostDxjybGh6k7kamLihXXLqCjXD4T3omDYe2nDDYr",
  "key8": "2PAWWH3gLPCtUcunNHPXVooA33uSp1kKoVVwAS2BFnKXak8ypDyapP6qNKXsFib7zpR1HXmYKd8T5Hu3XPWktdf7",
  "key9": "2kwbNmDzWBUVrxFm13gbu4c8qMfR65DzxPzxWJ2LaUehW9QBhi4P1c1SPeiXp6Jn1Rtreg4tpoD3CTjyQL37qh7C",
  "key10": "4QcScQN5V7BJ3MGrMLF36WN4rhANRsTmJpxWauS4E5fWs9PZepqH8ysWR1EcFoUXXkyuGxgLk4Gg6jzVhwenSQye",
  "key11": "qpW5TWw28iaqm2pJ1FREPqeEWfTkNigTuC6FF9ZpHkqYL5RrkaCwuT2QfXpkf3gtkTKzFqifdJmR54bcB9peyhp",
  "key12": "31CnFPciveuji7zbCjdEs7couYa1Lc9XKC9nDxcTBp3TdhbjVntMVrQdJLDTerbLRbzho6yN7KuFnhmbH6w4zReh",
  "key13": "acUwhej6nQBhYYRwxDuzi9KRBemsXw9R6BdcnCAuDqBgicsrorWP2RNQwpb9tmH5jbh4Dpm2amZMRfTh3GqB9w4",
  "key14": "3bu6RUuEjkkVxHbNMLAPoLMELZ6Xk1prysxe7vhWmXfhLe7Yh2pgMoJjHe5F5UmmyEwFGb6P4CdpQw682ezzseAR",
  "key15": "5DzR2DYnFokL2EYoWoR59MJQwT17hJfqbr2bi1XYVoVoeKiaWMeQ5aaZfUXdnybhhS87A9Xk4TTmsd6Zon75xkU5",
  "key16": "4gByD9K5f6DkSAeTW1LAag7oRQAk8e88mZGEA8sZzKzG5ctZPRBN7oPV9Lo9fjPd3Xq4LJH3LbDnJoxAtCfVDXm2",
  "key17": "UQxxhGLxBtEpztbhYYgfUGgUtvXbEhfJz94H4YnPGgQk8X3K76SoXNY5cJgA3ahzt82vfG5JhF2HrvfC4Q8QCDJ",
  "key18": "5mCuhitpXSMTHeAC14GRgTiZhW6H5RVcTh7zpkMLoiEhBKiCfwC8CSyVZemEAN27TQbhYEvnYcin1ogX5LK4Vcwz",
  "key19": "293Jb1X4ZXz71espSRQhv53xwLFd6vUiU4NA4axuKZwf5WUXhiCdnMFqYegZPR9rSKtEiq7XqJ8RyCig59hWqyka",
  "key20": "3exLNakubjoByM5KSZ3AjDGq2aGxqdBpLPQpc8zrrJZofyQR86NYK87fPfkRAeq7ink5rFm1jdrbj6iTg213zTnE",
  "key21": "5T4LRHBk6r1HdHCutb4Xe4kpeN5vpKnp3vzVAACrTreP3nRjU6hDwkyMJZL1EpxHVcS3TeHP1jVqxNYm8JsmkUXD",
  "key22": "3pkD6gYmkN3my2LwDG7BK73CB6iDShdqW3WnTTNvuNDabFToJY8MZ3LHkYRYwnsB4czTtRC8DkrwJjJ4qtXWpAtz",
  "key23": "4UviytheXBpWXZ9nkEtMHaFhmnw1zfYW5XEbGWihGkuphfTrjo2HuPcddyMihHgCvDnB76ZtvGhiAVB9kvV4e6H5",
  "key24": "2LP4ohfqU4R7Xo782Tf4QRfPZRQF9a3toCtEnBKKHT36wWwDuEoPZHoS2hTttKgEbrJdCMmGt1mVdf9CD83aZoWQ",
  "key25": "3URrBKKUf7Z6vZ3was5UtPu1B4TYB9Y3hFzrnrr3NCXZDw2ZG9uJtcnARtqwN2fX1SipsbJK5cY3tcSLn5Xabmrf"
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
