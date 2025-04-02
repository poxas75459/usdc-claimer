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
    "2iW7hKA5bu8vtTbwvVbGeRq9gbLTruCsTVJdHqfjtBzBn3jMqc31a4uWREEBhbfsY7MjfHpMDojFDhxFYymBepZu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "akAGxHjrLph29Yx48zfTAy8mrrdsjiqrVoKNzPQeiXzYx71jwEFninDYzM4aWX6fY2bSENCsbL2GDNHFq9fAemA",
  "key1": "3FCk3buCyzNwaxcHmohn9K6Nmrc2J1Zsd96p98cCpgtLUDu8m7N8GcuLQhfHFfgLNnSGaBxtG7qJN16yYeKJKoJf",
  "key2": "9qws1GeKQd34uQdM992kiYWxK6DdE9vTgq5r9xwsXzBwnk63wk1VyrgjWsNBpJbVHRCvh63BYgJ4dCBvm6e4kzw",
  "key3": "2xTgr2G48Vg37x6SiftFDGBAENz1hcTkgsJqmXkqMeBgjjVSNcQdbWiSrLkFHVwJR3LrSCTXQ6e6UhXRNFtmvcgR",
  "key4": "58Uh1EDNEA8AyjbBcMQQXQhMoooatBa9bLuJvrT915fUqcBpnUgp5jwH8jrWfaMAukcnYDqeMwj26DYFP4X65tLQ",
  "key5": "2t8xjiui1go927i7vWTu6AKpjGzLSibZMWg9F2U65LQhuWvbezpU6EZKEAninZLwfATPq8eH2273kCSyXaXRwqF5",
  "key6": "63Eo75m2wqkFhLUTmZggePGLP8hdD8EQrX8xDdjztN68QWcP1KHs2GNbp1gVTHqFfVKgsxgAhvKTGe9caXZAUJg",
  "key7": "2Fa6UDQr5DBcBLQcc5ESpDNEjrMsoCXVq1CQ3YEGhzeSwcsufbYCWTkLi8KaqMJZcmpazST2cnX81YahumEcJ8Sb",
  "key8": "485fCzkRe6u9ULdnCBMMdSS7unSkJQXkmTkmZFsq5UQPhSAs6zAGC5rEHu6hKRx9T3ZFmyC4aV3tKeLwtiFE1Px1",
  "key9": "5yrxdRmViUMaiCPYEwy9zAypc9KT3ioUNsD3jra125aYRLq7XG7nFRFna16dJQPkJMjkmLjLh7aAKciX5pKAiknq",
  "key10": "3TnvoRt4fBUGsBu6au6bsRN26DrzqipeXkE5HvDZEYYFfeBSW3AVLkWHfSDCeFX16wKGD52yy7iMyBT4RZHs8ys",
  "key11": "3r7uWc5XFzmu24vctqVipq3pYLQQ1nW54V4dZjmDS6en6WXKrbW7YN4dv4wZitMnZE1NjzSLCeSexSDdHugWS6G3",
  "key12": "57dNSK8tVrC6oTHWtpc1Sv4uyVrCvr1NFvWoKq5A2HGrwA5mJS1VwWvJy2En3nSQ72nj1hmFBJn1GffCwnLxQHkP",
  "key13": "2Rvb6C6xZhEiUh4Ytn3pWq8TKm4PvnXU32H8QiSWP4nQPqd4r3mocYKSrmwQKqAYbPhBnvbbgxmSDnNW4SHF4x4d",
  "key14": "222go1CPra1xiYvMd8sruD5vif3gPbYS3zxjJcUXk573kA5etmzdmFAMJRZ1fbUmK82BFYmfitEh7BXtxAy4ZFht",
  "key15": "65dwNZm2CJ97MCNA7PB5bE9E5Zpoqgt6zKrDs8Jfm6iYFZxJ8V13RTYGQDZTTfDx2g6kFK8agiqqzn4JqKA1MMNc",
  "key16": "4jNCjAS8CNjvDhDbBeJCstk1R6MV66bYW2cChJmtuz9cj2yr8yjNKu6BvFrbT8VVHLU6ctMgcptwERoBgZmeDRRd",
  "key17": "GyiKToN6RVhPBAUt7gQDHeNvUJLPthLoxgcZAAzwRBY4eS7ikTzpxQLSzY6CfSRZwGtUBTLZNWWM4bq5p8QXfUz",
  "key18": "RXhqWD8UXL2oEBrqnSGjSAn6ZqMxSTfnUfgsP5C4Ws2kfsmo48bRshB44vZqAd33x8DRPFxcKvsoet8dQ7cf8mr",
  "key19": "JdNYG57edzJkkpSMCbDkxf4zy2uyXQVjg37XDDWFFqj5CKxyrvTLaekPJFU2ucyarRxSABsnE6b4pbws7SK6rXV",
  "key20": "597gsvVi8CmDks3L6TVFTPeGw4XDF12py9vspUF6e4tvKMYJSDhyU5VRuEN3LTmKDaEeivVe6ZNSLGn7eUwyLBkd",
  "key21": "5Twk8w9ZBXVLjEGfJMq5aDx2XrcBdfCiaEejyhb3A25oXCr5LmDKDGuaUNMuiowRb2EE92RpuY8HsB9sjw72j2dP",
  "key22": "5XfWjvV3Az74ztXzdP7rTQp5X2n3t67jqFPwVuQAVFqoa8PHSqM7uhybyzLfVnRmdXbCtaY4ovcYMyGk5tTy6Wan",
  "key23": "5yjHMbTH5uiBSG4cQDDwjEULJZGgngL9okcFKxQKifrXGd2oBdpTCgVuSq9EsfXh9ortUZPRYnPDJoyS2P4jPpTP",
  "key24": "5bc3ZXkxVdJBodQW6oD4vSho7GRuu4PNVmguTj5vNdqfc4ZHQwsdNVGL4qS8iyXwhAKLi64DtAdmbCrpoDYpN2yJ",
  "key25": "XJLEGCno2iKEyctRecArNuHLZa9UN5XWseZezRxeq7yHrrXRpLBZuozj3nCX7eLr82g1f3bmx8WzyG4DzbBSyMp",
  "key26": "3JN7vN7oMr2J4NWnm7RCDuR85EVdvJtwyKJLxEcsPFA6JvcVc1JqGgw6J7eTPQCFB1AJ22byo3GYXUYSTq16nzMQ",
  "key27": "5DDzBz4xmsY8UiX2EgLP4YW6MaWDTRD8qUmuSwB1pHoekXnF47tiNdSB5dQEXKy8GDgSn9mEYif2VAxZjrpcPgdG",
  "key28": "3e6LimrwEvsgGk5rKoTK6Xm24ymH84bCVr1gEdyo8oc7zt86QmCEdtFAMCE57GtZRSDLGepxjunLQYFfaYNHmAuB",
  "key29": "GX5T7V9v5XhKxXvdfDwN3ZE84x7piYQva5xorxmrowtzrkj93KJiTDNoEPnNsiEyXFHKPZ1r65zzCFwse9C7ywE",
  "key30": "DFqdRGxp6TfGEjMfZPLe8F8SqHpXvU4ycJHtGFRjN3bn7MR2kod1a9yPNW8CeesxaSokBQ9XBvJ726qFLQeNXxr",
  "key31": "5fADpQdHnf1NjbuEuMetLKkKQCumDxG9rz8QznJFMDdVCeMCbKuL6s2dcN8AqqAF97izskpDoEB6JCpEZYxzhuaH"
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
