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
    "eRJksBfCsYh1UvDiwzbZTbSkTiE8sJ7i4NZ2KXUWzZy8eCAk5CirhHPAgkLhnDuC88mg6h5WiEV3dVqnxwy2KfK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HTz1d8DmPqmoJaHpVbwvTDQfy1HcYAnTms4E8DAanhHsZXxnQaMgNG21oq29uiN7t9qLrNyxqdAsxkEH5pHyoMW",
  "key1": "4HmMNDAckbKXm1jBwJQMdqqZVj3cTXeryWoinucpTSaW8BMVFSndgtGgshNApmrpYqfxT9iGJ4g8gcK1XybrRwVB",
  "key2": "gkZwWztUX7wgjba2ytqvmxMqDe3qZsdeP3hTpFSgVVPruFRGSybpsPDpiqCRJpPAGiKYh1NAraf5t4LqovC2zWN",
  "key3": "2iPcYXs5v5R7mZzFioNqqvrW65RHnnbcmpmrY9DAoqF4JVHnq4JK1nxQRRmPuy2fKdxCQwFZGvyvBiR3uQX6HbzT",
  "key4": "64w1ECRvFc16hCg8hCMmPP8moSWXBoTN34BNvkTwqoLQMMJbrH2r3v3MdfWzFmEyvVG7psT9g5HQf6fpcF6xnrs1",
  "key5": "vxDkuPMmqf6REeqADe1GmzjPJ4ZZHsuRkFZ2yA3kcsAGf1G1zxjpi4owcTVZmmwpaSJ7c35SzyGxmJ1dhTkC1QU",
  "key6": "5oyqrjabg1EQEMAFrpDxjjLxtNVonfmoGDxvdyb9uCd4EdqdfSCYmukNL4JY67AK87KfuAK8Z9CEuyzrk23Toid8",
  "key7": "4ZEJgJWrfFNb4JYhHnU3RXLptS3SkHB3S14jwA86xyN1WMAtrtur79aJytCMFyidkvfBiAz2Kd47Q9LiyE2vnZh1",
  "key8": "21MT1n4aqbMExm6xQEJJPSuLnN7DeRyRCkWzqnAQBs5t7vj8ZWg2rUDD1ZeW6c1tLvS3pyPpJGAjHp7rqcJToBpQ",
  "key9": "44AW22Aa4Df8u94yfCALaV5vYfhvioUEhj94LGmtuuRc9z1twbesG5w9RKvGEhoBXdSRuhdzbaZSmDPSJ28mJbRC",
  "key10": "5YTWNQaxTtVfDSLSKXLjDRKBR4EmBcmCBgZHn7XVTgef8qG259ECSTCw5hemMtGpnv5rXC8hvfMu3JByxUkuAqTG",
  "key11": "45efYdXoxTxKDMcRWm2tq9PqfcwVr6dmxPzHPC4mm6uRzUoM5pvAnoiG7ZepDQtfozzpFzoykgtusXrpFRdRZxxH",
  "key12": "5jVZQNKYsBpuFtVX9LfQ31tuHU8gWyXo5w2hq2PcWR9WKU7iHcig4R5AqXpUtGcii83Dw9s7EeXxXLYEcvVuPe5u",
  "key13": "4yqBFE2zesqpXSgS8jadyB7PuGvJ6Q8L7aFQJZDZbyAttwGUfMWtZJdz5CJC3JPk6ZtQhFEHiQuqmA4AgYXz45uG",
  "key14": "3ZnbuGhZCBLD6AJbqxJFEQZpPH13bHb7qaGbZHjK5LB6ChsnL4s7k8MrdTyGtkSwBradV1PUAaKaaqDCU28BPzBp",
  "key15": "2kzVsM54T1aqYRNJq9dhvLraAs8rkXZM9C8fJEdzJUKqU3jrFmupYsc1XrnS6okAp59gEDpSfwFZy94yDYLoxu6v",
  "key16": "57j9JuV55GvDQ4f1MfyU7N5ymynDru8FcAxATCMLGuvGZqB39E1zFDRNWB5TDovAi2KxxtSzrw51QaMtTyHyshSn",
  "key17": "4s9KxjLHMBmm7qJVwVXg8YdJxPGZPTCc22DvECQ1v6Mva9AaM4GfNGK9MdHV6kaAg75Q8aDbkgPN9NFVY7oY4VyS",
  "key18": "YJRB5sTAEmbo3TJVLb4qnJEc1LsCkPd1rX5o16CKEq85QvLYTSzT1kgiDPE2Vdx69dvcrmXUkofGK87wSDa42Tx",
  "key19": "4e7CD7gJKrhvBqbAeercxtjYdtcKQwe1aLknE5mi3Bvf8RT59CDyUYvNkERgmmGFdkgzLkus8WmkoDeH89e1tVpd",
  "key20": "3oeoqKM3QECSYWE68Uv3JVVaV7W4fXTTzMeiN5i2ZPZdrD6FehQBBAisd3qN4ByRBGvbpP8F6NPbW2GFyd3JyCGW",
  "key21": "5kLuoXFrb77SK6UX4oKPixsfJttRzQdFuVVHpVBibR4xDAWEjSNE5ZciZDaJ5TLdUtaFGWnFoyWHpVAxNDjtGGuN",
  "key22": "9qn4i8JFWhNTqMJPTw7BjKvMocm9bbx4ptxpx6b5CXF4NxVhCnrnvCxWrFuUTFALzfBKbPncemaYnRDQzSGxk8x",
  "key23": "6w5Wst341xZ3Mid6NwkZoysDzDaeBp6Jn2qsDSzdLcTinnPzAbZA6kQNLxz3TFsZSHHHmUGRzcj8FqZ8gg7Wvf3",
  "key24": "yoGV1S7bxhtNf1RcudCCkLgzhHhbN1bWg2wpPuL3RWXws32Y1M2LM6mva7HqbmyEMbLc21jJikubGfgD9hoQcon",
  "key25": "4f6ArixP1DL9a6PodgXwsqXLeroRSWTGjvH3JBowsziM2xpksezbHWZHp5t8dyrigXb3iiQe1Y2TPnSjC6PNLmfY",
  "key26": "23Zc7DeArd9p77hCJCE6ht5HFMQh75zXnZZBBi8DNeXhmwxMPhbC3qn7LhniMXP57rv1oK2dmvvVmDtHwdWd1XHc",
  "key27": "5JzSq3Y4uSq3cKvvEnVjZHUqLX4KDMnSEqdksvo7kpXeVy6T6Qi5brXQHYL2RWGfKeCsRCUeJpsuC9PUpyLjBCyd",
  "key28": "UPApVpiEWdYhZbwPnZ2TD6yvTZnCP5vsyPbHFjsxRFbv9sTMSennkWVtXQdzYmWqvijmYkhnb47miiwLoAFbhr2",
  "key29": "4fJXYc4VKNz2gjxFCPxFqpnoUdRuGog2tVkVMUve4GUJUpm4Qt2tgBGm15kUkiCbntUFvBQA3cyef7NPKA6sAXvL",
  "key30": "hvyfmbSqhQUdd85zdsV2mZuUctE87vFT5TujHQqQw7J97t88DEFTLLszZGnvFzDsxPyDn4soi8db8GjbQ7p5AAL",
  "key31": "3vJykYd2VEx8EuTZgWuazEVrynCwVnCJrnK7rDtjnjL29jAi53RXsRbqfpfRz9a4GBGqVuKCHQTEPVCyxy5a4P2N",
  "key32": "3aFnJr5xcRZnnZZdmZK2AMGvZAFtptfvVQTMcfQGzygFdvgJ9572TSBr6MwqQWjtcmyQG3oc3MsSLtfFPRicLSew",
  "key33": "3QRYdJ32QBSjdapLAVYjbSN8zkcfGLcnDxHUPAZuyr9sh3gb9REX4GQQAxt8cUk8jRy3R5vybDgegwX86khKi2CU"
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
