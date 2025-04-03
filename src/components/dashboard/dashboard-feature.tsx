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
    "3bbutvBK4RzNEoZh1LL3oN6NTg7n8K85nzRR1VZJeGk5tkQCDcBf4RXdU3zj724vSMgLDx5sksvAmJXMGNtfghyA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jWwGnFYqxBbdU15gzWi1NwGk7MPD2jUzyrjsP3dTaWJ93e3TyXYs9K8SMB9fUykVcviuhju96n8JF7KTXRfeb3J",
  "key1": "4CpS3z4VXQDaLRQjy451MvU3jmbmgp4ux4T647pX9Ab2SidUpwPU5w8AHuVr7j92S5Wq6KVMo8zT4GzkEahTStfs",
  "key2": "3LxAsemgsFHkgcPqruVhTRG2yRohibYETQFKF2VS9xrn6yCUNGSm4CuzDUrvLumSiUZ8SS6XLWDKRZn7KH9QMvZN",
  "key3": "5hJYmmDTzVoHpRuGkej2Qwv3x6N89fCAVEhbdFXZreQ5bStGdkoDhSoyLSPQPRSdaoqKJJTRoCJUU7WjYaNLPcgj",
  "key4": "SZTe8fk3Y4RmEqaoHBZSPDe1gbRMBxV8EhwCShyaXbCAm4N2Rc4bUeXMbhoyzLEFLTia1BxAZMQs694yzYA6yAU",
  "key5": "5LfzoALLRxd6rW8L5D3G4paco1nueNKEvtBnp8jDsHppPBRAcyNFhAdhGu9TepmXBpfPyvsVMb4Lja8615NA2rVt",
  "key6": "gy8GPhyYjXq5GWLEZLCmJK8SSMSp9ph4TD5DNbnJd5kmfWuwGJYXj6eguie56Z268fdSnpdFvkhnfNQnLLP7j7s",
  "key7": "2qZg7BZNMMk3xSJqjCBEJDKcb7UGc8iJSyvZuDEJL1W4McMsi1QUfwgMDZE7maVUBCDQoepCi5ShvcEYZ74zUDYg",
  "key8": "47dSLWkyk1FaK3fR4ncbhsu4qhqUhpHo31VuotaDbQBfVUeBguNkSxTdTg4F3UKfzpm96QmyaPzetw33ZrmC4JX4",
  "key9": "VVXJ4yybY81c2hbMAvaiPjgwxeciQ1ncCECs8CnHx6g2pLjwdPHpLK7p7b3MYiiW72XztoCX16JSrgdr5fq7F6Y",
  "key10": "2Fzx4jMhgbKo31M5hurpYXhf9cgXWsLNjbAy4mQfzaeSWswTZDz3gGYhyyGrRMytwfx8pUAdbuYSjEYovJzp7dAz",
  "key11": "2sYYb61C9wuWtrKPyAZbcZ1AfkbtrxVicrkK7sKeuPm5J3LayMuouj3ZzzhWUbWdYjYrim2rgwh2Pt3YjmaVPFoS",
  "key12": "32eDaw1zYUSV5dXtFH97149ovko1dK7gLHm758HZ4XumM6C8Q2sEwhkHpMeb1FagoqiADQWVcimMa8e9e35s7VPa",
  "key13": "nBNjKYgoLY1DPq3qLpaggJUh35GfU7P4hPkb8JhnxJXoP9URkNkBKzvEUF4uJZySyFENYQ9uY1zWHffKCVMYgeu",
  "key14": "5zSEq8mQBiEDLV2vy2MVVSqSW2MZTSm7tXL8asMP7A6z8cDT7ZQLQXWtRhPnCutf2EuAVr8XWNEwnsUAJRuvMXg9",
  "key15": "5dRWBCKDuaLSx3mS2PP1eUJdrUGgGSKyVjpJ7voW41k9ThYu3t9orJJ2qVzh9eArwNQBniMEPfXVA26R9vas3vaS",
  "key16": "2omyKvHmwejBFLnNDbG2rPjdCGK1KLRW2AarJwzZuDDZoGi6NeuCYTEdnq59mohyyoRwWd4xJmFpKnzoMw2tqrYi",
  "key17": "2cmcthNXEHBscSRJB72xp1kbxFZPv3biPWLqU2vDr61hHpRVWDP2NEtSM7TSrbk2682Y4ZFzkNc7p3h9zCaT9cmi",
  "key18": "ig4Tzt1nLGhigXks6UEKRzV9jnpDXYCe5irpRk1usb8bDGkH3gQDGqGSZjFe8mSRzofFiqpQ16cAzdoTSZG54TU",
  "key19": "49uDtu4WmPShKJ7CfYQ2pKSKYjqKGXonYv1dxyRWkwr8wiU2rzQb7mYyTj6XNYYnXK5LZ8MDgQcrbRTnN7MtsBnk",
  "key20": "3G2MzS9QkgtafB2sYJtPs7yFqchHkGgDfgbZspeh8WNefSGjZ8vt5og8Fa7pSjXMLQoYgKFCV1wJcMfPPELiPWRk",
  "key21": "5sfv5V3Hep2RZBD8KGryW5JnPgasaSqJJ9WLNSbr574iF5FrQwrUaYDxkt7DWYJLk92yTJffLs8iPRKeLZ7pqAmZ",
  "key22": "55LEYKUuwxuhbR1vWejZP61Tzx5xMYQk6Pj4zvPpd8v7rSJVVQTQ2UijqNxdm2UMhVLopMBm8ExqwCaLwEqGhp6K",
  "key23": "5X7iTgEYho27vbmhHoHRpCCmq79JdLszWM86wSzVsxcaHNopBwcpaTJsF9VTjMg9fyGX3KGExPh2S7Tyn3uFqzjP",
  "key24": "3EJwGLvMpYqZahyiBLiHU5XL8F6xbuBxmq2dQqN3umb8wWYe6xfYwtcfUPWxs5Rdd2JQCQQGmaQdv5metENhNrSW",
  "key25": "5SJ3uyTcVYAxAJ5kubbaJPjsWzggoP9JR1Ha8eNxMtE4cJa2biwXHPwFL9F2bVCi8DJH1qNfEcXcuknuF8hmZxCm",
  "key26": "5N1xnkhKsPeKmHD39UBb32CCbvMrGyyDkQCGQNv9bZPzWhDhyy5d3BqhwDCCMU2To7FYj8w5Vf8sZSX82zT29gMB",
  "key27": "3aRpt24ahoMYtV1q5XLnvWdW15epa96FnXHNVTFBuayiABcQJvowqfEz9qr7EPytxMxQVJUuLdkqjHVUUr3fhEAA",
  "key28": "34Lcjc5Z4wavkbhtRmjM2Ts7x8x8Ykx1ncAWbtwvTDGUHtvSc7XjHGbMeBx6NPjpWqpdv6ar3wpSwSGBTZ96Xr3d",
  "key29": "37KPtyehuH4CgppbMDadiLsy55zwCUaDnZ352T6KHapBZNXVSossVrZs4o4uSPHYBc626mfzhHxspKKrQwtJvfMg",
  "key30": "9YvcAezZtBwn9EEprhshk6nZSPCt43hBPmHEeYW6adtHLtxpxiyhTEUBCYp1m75hsoUPo6oXqxJMLMSG4V7ryDy",
  "key31": "QVg3eaoRCzprtNsRndvuRKVp5fA597tCpKWTamFJynRJp3hCzghiemBbBXNf4CyCxW2XLwBHxDtbGvsf37ujJhM",
  "key32": "39pmVVLwz8fQEdpAGEu3pKzUVgKEHABHiJmVqRV7pQanXGnARmw8cyZQudw8eSE6mrgLjJJSFea8hQXjY1ufz7PL",
  "key33": "5njd7d1xJC586aNFrvUcC9h3J36bds7Pdux5XRPkpSY8WxDubGWUGahuZn28EViq3AZ1QJDfk8gkRwwgnfvPx6QC",
  "key34": "2ZkhGc6QzUvr3SuMVhaatWUVwxsym9Ud5B2ECqveuPanfMLPzvMsdyE7EHDTHuhPCEwonbnTT4Bz2t846Upjddss",
  "key35": "3w1C3SbtW6tT7xnTUGs1UKaQYy3gZYUSSNK5K3eQN4egK5tj7KHRNXw78yg5wQHEDKdStbUL4j1HTn4FWjL21hDc"
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
