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
    "2TVXnz7RpLcbVjEMeo6bKUnuWNqRjb3gmZBqZZ6ogh2BtggknthZPHfynPWBHNasDLCWXsDDHTMd8tJSeufiehb3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c2iv83BVcxf57sidRtpt1hNRep9kyEDEbU1meivcFP6hgtAsZbpjSxSmpX79BFb3amLuDfSkVG6WeSyjMu98G52",
  "key1": "wKNNGcZdcqBzusUhd8rsbo2ewzjXXcom8jVoGZQZPfxBctakYo6VYXairxcM1oYVU9FsN6ikTwpi311vVB3VxXA",
  "key2": "5vKxWekgAfUYhCyoeVAmG611juGPwnoQxFp4L7QMLx5iahqSwenPNqgWBizuQQN8NV4YpL58VK7n7qfRXZCTKiQ1",
  "key3": "5N5pb6BpWbMZpbDw8LXWMo5BBZzLHkvpeSkHp1ACkfjqXBVpzqkoYtGcv4ftHz4MnK1PmD8oRo7obE8gStQqgCqv",
  "key4": "3cwuhS2rREQciw35qpyoeyceSyjKYTDPvD7jzZNyZEvZGDBLfgF33YW5rRnuCfWgEj9ynRAt6mEj4tAfxoh2pWs8",
  "key5": "5FMMyxEJdeXCNti6B5tSXpn3XJQvgvVwq8tKd7RLG43ZjQL1uRmt9dcAFi6pizvgSZQ1AdtydXe6XQHLjWxKEQMJ",
  "key6": "N6VfP4UvW3Vgd4Zzn3vUWHWvHXx1qwRCDuVH4bkQVZjhXVxqH7Rb319CvCw43CHRv5svKjVzkC93Lo5jnj52GRd",
  "key7": "5Nns7Qz6JWGo2rQFFGUgkQgti9okMQDhtotsJTNoD6G55YcATNv2hCuFDbhJqUqz7usJLpxGMri9dvC8GNzoxVUw",
  "key8": "2mSjYxMczgxNGBkVGq1X3azuJViP2v8oG9Yd4tK3QYQaH2CEjgQewHQLXEXN3P1tji7jQACkWw1bsEyiQjbreGeY",
  "key9": "48tmDiSEyuRo8qGE17QCqZ8kMgtiTSwgbDnEy3GVdGezHMMcidZ2QVKC7w2QHpHFtSBvRaQkGHEmsCfQha3Fnt4v",
  "key10": "2uMp9VA7cM2xuAjTMdsi1KAeYE9sWu3xD4fLy9Rn1JY3Ca2gFecWZ77HJmLvyDiKKUcHGckHEW7bjz6tha2RrE7Z",
  "key11": "2y55o6HhRqqfj5P9p5HZqScqQ82JqL4Lz1EbtbYXZ9JeE12S4MsuqWQjrvuBkEXaRVncERRYSsuaSBo1xWcc1Fnt",
  "key12": "FMBTJ65jCbySoD2vRt6XH47ceaQfiYJtFPSiaNpge2o1JFBWdrniyMiw18H272nYxNrFChcWSZUzqiKUJDwHh1Z",
  "key13": "44LGNq5dDXzezghLp5eUCpwnCtQbWga8cWYRiJ82zcMxCLiMHmrSgqRi7Kzx2tEkpENQwKgjUCLSyRNYtaSehP7M",
  "key14": "4Ksmzo91Dy1JHVAXUK8dCFQJrsFFq4pTc89kCGTBUU7Um7sGMeQ9hj4BQ8Xk4GRmK4fkbiLNurrmTvqZC4SMMzNx",
  "key15": "2DL4TZfKYgQEkamnetJRpe6b8QuAqxp961NW4hVw3Qm3cvoMCf2oXPsHD3aHf1y4svQXnkZhfUpuLAUXhiXKWBXy",
  "key16": "39ZntBknfDHnx58iVDvYE6kpjLDLhpEv6ieFFvnfaVHk5eSwG48Lx1RjW6NzXAAzk6HEN1Gu1eA4EG2nUUQyAu7L",
  "key17": "37pHT3AQftnRWh4mLhXq9WxxQuT8ooaSJQupvjVmnyVqruHmbhdCDHikQdfZxeWRVepc5HGzhELHmjT6Z1XsMin1",
  "key18": "41sw9XLbC6Qw3SJMHx3G5hovZJCZWtd9EchZFz9PfMkNYgoqZQWqMZQ5xBupmacPHqWYE74USuYzoNkium4gmqt3",
  "key19": "2SNT99xi3nKooKyHrgJx4scNVhmLuBymibjUy8QKbCpPPg6W57q8maNQ45X1R38sTBdtowxgTk9FodXraH8cAix5",
  "key20": "47XRigjV6Fc9bZjAmRFVQFDe71aF4DgbJzYUYRv19TvNX9LourHJJbCmVKzcFYRXHFY5MuwjKax5R7mjW9GpsRCQ",
  "key21": "2Mr88xEPpNNH7xBHbPPoN738M7UwhZfbD7wQRVTYSFsS75vj8vkDdw5c2yuBmri45kjiUcJBGs7wp8z9LUSgaHAb",
  "key22": "3SSrvhNmvWunT9zyXCwCgaRFAyD8r769jm47qAd2tNbYdAYCeaiYXEy139mqa3baH33M3vE6fidJMLCtXzAVxAQJ",
  "key23": "39Hf4PFMqCNeSbVBjNfiL66adXY1fqxJNZ9ndgXDQVZEmTUrdpFWskbvNa3BAGL7TFNhNKEbxgs7NDMWxoHHXLoG",
  "key24": "3ycqVUaruHVzdXMLpjLTUm4gdPzCtusLG7AGFDQvoGT5LmGAUH18c5SihKAvsbLgaamVmJYf1RAoQKW68eM9zt3m",
  "key25": "3R7PDuznU7h1QErEXjnKSaDeZVSREUPr71yfrmgxP5pZa1qnKg9YpL5bS3hZsZpv2GBkm8k2PtM1ebQboNdn9jyW",
  "key26": "3bnHLBGRD8JtsgRnSsQSsYiD4kTKZ5zCiTo5o5SKiHAc3StLjjkyGkNHraP3UtGU6rTLMs8aaUHR8mA87MwxrrX8",
  "key27": "4WUibCxAoRELc9QKWMsDifJuNrQzqvLW71xnnX7mx7ue5WB75bgkkHd3pcoZLeR9RZttz7ewN3kEDDsecxjGoHma",
  "key28": "Mmvv79AakxqbXGD4hPrsMPcZM3eca5T2hyD3gSk1QMYeFTyDDnpqbgfGZXcwYcPYJjUTvZHGaSwQK9wwyDFGjpv",
  "key29": "2kxU83VEzmzAhTQCb7hewXPrWQfjLbRsFRiuTzZFWNASZjedUccbDLG7gho1Y45es1nUZWs8e5SmRXoHxsAUniPz",
  "key30": "2Fdm41AhhDUV5D9E7Gwg97JgpiEdRounuZNYpnzhKnxqJMzbgygcxoX9SpENQPNVUCRzcpsFgVuVPFqkhobnEddw",
  "key31": "636Dwfp4n9pMAFfnwxTN51GUdvLAuiRjXQxMKQp9V1pszefTRo6YJ9FqYHDwVLdqdz2FUoKzW1NH91ZNCzTu9NJf"
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
