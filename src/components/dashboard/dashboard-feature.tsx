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
    "3zYxWXEuNXy2YgvUDaxzb3Vtup9SA2dK2wJx4jG6yDu6FyE23jPj9bACW8RoUM3aVYdrEFTUXPWW1xdyfpMrD7hN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MtWaKynFy3pDxyXWJiC2BRvN7dgj5jwZazcGRa4wbyLFNaXRuKgssbF4iYwYAVcz7paHsc2NkbZfa2Ew9jn5QwE",
  "key1": "34VBHz6z1AYVpSsbXicBDSCTsaTRGjszeGvjsDfkTB353esdNYaJRrmFy6xTunuZPRoE2e5VLPYH5XvWEpgY2Gcw",
  "key2": "jFveBL36tv87JHpzLDPCHwg9Q7mgFehp1yY4ys7Z1BtVKxfc12FiKVY4cDav1UnRey1QqGL9eSJXHNLpLbHMPFR",
  "key3": "5ndM8EnkPNVvzviK18ERDikmYQQoyTzcTMTPk3d4TaSEYNmC8ZNC5gRojEyLiBpq4rsni8kr5aCaBJewyEvGCgYc",
  "key4": "5wHuCwir3weAPi4vS4tACx5Q1BpXfMrJVB9XTY5B2XfVjoU9NWYZ9XaeXj7EywX7Kv6VWGFb2nR8WCGNWa3rYJ2d",
  "key5": "5qrqc6tQVrJg9YYQUbSdSF6azHSJFXfsK2FxG39jZGpK8BaFKGsP9h8WeMYKLopkU4QLXkiVjEsR31GkFHWeLFLN",
  "key6": "37VnTNkLEF3cADmciA9XgFJfh4enVKqu4D5FvkckoBjwKcW4ry8fuTKqeQsFmrUcaQuAsWT53g9eTZ3wW24vShgw",
  "key7": "3or3nVHvuWJQrYaS33fUAhqMVk9VR2bQN9C7QfMF2YcvgdmYe6UmbFDVZVdccTr9G53b6MEzqaaXb3PF3Z6ob7Np",
  "key8": "3TY1WEPyNszDYLvA38ZS5auQAneErTB3ebiwZZPQxqKdqG57WQbqWcYXeSK4CHcG7Bf28EA8fZcsv16Btaa4NKUp",
  "key9": "4HrzYpcoa5utY76MySDwwA4Qk7ZZdFY8fdpakt2frSfz73WJtybNzdPsMSV5bVkLCVms3D3kjent9VSm6tdKZhru",
  "key10": "KPAW6KZVFweugHRPnRdKx9ausmanBaryFXNYEoGj8k6NRLpdKz9cG5tuDyxGB3398h4VcNQiUbBB8xsWCAgnHGU",
  "key11": "5HDiMpqkEohFBjkjPF9RGfKwaNXAd6UnseWzgiX2wKAKAzCgSK4fUe21ksMoA14ZyAwbwGUe4UNWUhxeBcZjaS88",
  "key12": "2YwicKs7gdTjzALD8ctx1xdL98ZRgxHTK76MwpqX7WVc9QuKMdPB7MhVDgiJLsBSm14gzsRKDuhCJ8SEuw8Tzc7k",
  "key13": "5KAfuEDQH5PgQNjuMkL9U6Kwpe1fDYKVb1BhHcDaipdGe6fpEaZmb9auN4drRuzR94rRFoUArDY5BQNuG5MaNKfQ",
  "key14": "5363a1rmgim8ciyFU1XVTyuSm4KTovDuXror6tXw21cwKvZQFfH6uLwMKciTFmZEzmnFp5tqsWqUtM7UNUb4yQv7",
  "key15": "3svPKXuJGGPSrEMrXEYaJWY5H4K1eZnXVpjQBaEdGVmBKNzRkxb3qUUkQY1xU3GHTSCTLuNwLZGaCTKfhTFEMLyJ",
  "key16": "4yKncSHCwyAyzsRy72FnjHc9rbTWiDZQw6HsuwKF878aLck3v2KW1YvrJCSvb7jenA4s4SayMxVuLPk6H1JWdd4Y",
  "key17": "3FMbBwLvVSxCPgfvbHcRzLynR5imdctfu272pemQLky4SRQyHJWyhtJ8rTVvVJUhKDvBDBXv5NqGYvcyNZyo4HZg",
  "key18": "3p2Mqne1BP93As9uM1tkJgGErwQKVMpzMo4JVy2ret2V5MqZ5xxF3U4NUNYTtSftNDTBN75cymcACcvPoUJU24LP",
  "key19": "3QS8QpuZqfTqvWuiRawA2Eo9etGAHHTr7CnK2khuuhibUGSNZjdBcV45gSfLtqsqcpqEa2CXTs7aJjk2mvA3499q",
  "key20": "27DCYrDU8eouYZFhikMDiyvGe9rmAEeZxRHqyarYP6yXFyXJDbiS1q5EzjXTcvayJgntr97LkxKexyhwaQme92Mp",
  "key21": "3LoKpfH8D2Sy16KeuzwpjDcU3nMuVEF6B4DBui2EHJTmsiC3uf11hTyEPJzjCzxbCDWkEavqB1wbocwECNnDyry8",
  "key22": "Fpf49kokTju7mHrdFAtGf85yTyAoDrJ8BFKvrV2Wndrgkgm3zNPirK9E9j3G6gECeFtxdsnWmzwGcRUn6QJ2cLi",
  "key23": "KMLLACrcXcSzZmJJye6CvAxrD1DDXgG4X6M5ake3iZfwQVipuZagGB1d3Au3W1cW1WT9n6FSha9PUsUpoR1669h",
  "key24": "3C71hg5351eny49kae8bgWyeUVacdqmM8N3Uo1BTSW9toaYPwcqwu5nVg39HdSRCZbHSaEEEGXRkx2wr8aADVFLk",
  "key25": "5bdTDKtbNfVhpgUXnAuVJfrmF5r3aoBNuCZWj8pbHtDHm4qstSixSRHp91wqYrwrcQjW6WojT5scy8Ly2oUfVQfe",
  "key26": "7u9ZjitbkHTX1giVDNKLWfP3ng5mMUiZfPtLv53yusTDSMpc2ezQ7LGh9kfvvW3Ucz1JzLRbao5DXP1KfrMv3cC",
  "key27": "33fX8nyz4oESEDD3vuoY8XdA97rfrq4RYfPsdhMcczWgtYjyt4USe7bwK6DFL1jaZxYvvM5wtnY8d1apSaGn6dT6",
  "key28": "SruFzFhPu3wVRccQrWwhxW6HF49dgTEM8DR5cd36F13u1i2KoiL77bh9x9db4wwPfiNZaQkRhkdSNvHns3nSksU",
  "key29": "2aShWBcmTZ8hJcajidiX6xANT5KJiUMiT8cxShvyH7MNKUYtfztWTdMmfQTys3ydHLaP7Eq6owGDugj9kCDGFnrj",
  "key30": "392mhFe9iS6Phrb7eNEgfEHY1W6CcvAmJD118QQgSY97Q12eLPjAAJoxaKcmbYKruddAsE1herPe8nUdotLnJFoo",
  "key31": "3dC1bJ3n4xVJhqfQHW4sd1saezLzGtRHUpqyGQgR2iw1beWzsnTT7Wkb81bB1CNKwqw9M3WdfVGtrD5ybrikYvku",
  "key32": "r7uLBZujDVJhgPt4EeZxQMp1Lg7Be2w3USEo5gNSSZXf25af6tfMiu7X9jbqLdCvXFViSkehMGWuBo9FFNYev3t",
  "key33": "2kEwJ1hgtrVZukuDWb8KzC9uhRRdiDokYTqHju1V8u4JtSGaDfuzHUF8vWsjwmj85fJozRHQkJZ73Pa22uK5Fdzs",
  "key34": "48jj2AcJFqxMnCFnPjrLFmNprLgJ71XSnc1FKSggYYwfbqj7UccyUbwNAfK6c2QwcdzcKcczKnMS2JVES5pkksQn",
  "key35": "4d8NTU1cm6fY49mXJ7f32fyaV8GH9wSzGV6c1pyeodLFPXYAbjYLHmn6gocB989Cyxxy8hrh423HoLTakvMBsSKn",
  "key36": "5vsg7YKBhz5iCjNn3Sc56KmKyyCsZedBGNDbRLHt58xEQW5ujs5zzSCbwoEt7WHYuRWZTLUBPdGyVyM1nx3BK3px"
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
