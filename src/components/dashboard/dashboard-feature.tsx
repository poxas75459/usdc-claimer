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
    "242pVVs8hjyBpVbxh2Tcc9JNqiabr9a6wsinogHmkVERgyEDFZNA3Kxq7WJEcaYGTGyk6a5qxHfsGEeycadKobm4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5exDi3sPbkEhXww32L9vxVWzVdAKUzT4rLPUcyxibogFK7LjVmSXMXZKGWmqJXyx53Zv7ea3PCniKfahCamT3iJs",
  "key1": "41jttxYQzvmoxy4b6Wdxs6NhougDmgSU2MDcNpk3Zm3VMn74HtVEwQPrrp5PDi8cjbVR2eGWKn5noBYumXJ959u7",
  "key2": "3VDsUKCgyN7fC2s5XdZL797Vs6Q6BvxQyke9qHMGd3LWKBZvRDan4XANKdWk3pkCaGWB5u9KkS1CCa8PZrCsAVR9",
  "key3": "3ZNWQWKRiCRsoVjSvvzYivtxg9vWBi7NMgHCs8Hu3vdR23VvwzgfsieEBg7Yvm7jLWnTLT8CCXG9iGBmmYc4LPsU",
  "key4": "2PqAwoKvN9iHV5gazM2fmRpho1CTWkEkxjbidd4GdEohWywVvzdEbXwQSBi8ifRvE1BNduyjt9SztSD7bV8MbgBA",
  "key5": "SZjLYxnDhS4HL37EjgeGNsC7WxC2uoUuGTiuCJu74ShjcTCjVDGHrM3ipsRQSrmCX1CgsZNhQV9HEjqgAfVHDAU",
  "key6": "41iHC5nTqpEMgEcEwxRZpmiyvHCyZGY6rZt2rzYvfDH39wTEFLCvitExeFFJjUUDd5c7hLXdG7HbgerHiyTgKC6e",
  "key7": "5JS8xiKfcSDoNeuJcyyFHUjqQgaddw2eBWh6pHWNQY81zTTtgth6iSRpBCEXZ67wDZaL2NuDV66w53LdjH1wmDeg",
  "key8": "fsb7xLmfTv2dLMwadWd8KHPX7sX7LbzzRSoieSYzZYM8Z24BcCBn25Ln9EQ3RyJBBLWr6bRThen4nS8Gd4sWczh",
  "key9": "52Xe6d6Xn3qHupKFFpvQf3mZqCaFPL4UBptkAQukLt1S6kRbY2VFActC2PvkyGwfHu2Juf81cGQszesbohVTRoJt",
  "key10": "3QYDbpn2vRKc8UbEK7qpbtiQxjHabKFhkp5sBMXVrmC2i4JXN6cfVM6XfKmbhzWKoPzEAJU7bPcLKBkhbT1C6aHJ",
  "key11": "2WGgTANc3z4ibcoSLtDpGQk6pFg9w89oDjT3zQPybjg7kD9WP5XesQWamGtpkv2xJ1qjmaytJn3ugv7zhQ6sxbpf",
  "key12": "5eshvzxrkiYeJA9yx98HvFQAf5vowp7WvsSFQ1z4GnoqJ9vDTzHBuHqZWS2DrkSrypiUP8XuudwVXtqg1baqAro6",
  "key13": "5zgnRmsGAThdFhjKp4cK3m3VJ5pr4wjzuECRfxiK3WCQ4o2Gw6eAJ9Wi7LQmnXAZ17rzVnC7GTbTFKzZj78Cer1S",
  "key14": "5WHde1Zj5Ye3D76gVYjgHHeZRdHMoRRcVFmnE47PvG8h8nAoQTsWeYhsmmvj73uLeeAgUrDkmQNBFWgfZQb8Ynkk",
  "key15": "Upje8u8VCiR3JdJYGHgfVLsEj8ZFSZsRQrKfV4zRwxajgzooKFsvZDdt8srMvTyWhmFu3gfjAoNFoZfYF1LkitL",
  "key16": "4KekFTtNBg5A55VkVoB6M6xrWPSazWVBzDCSSqauso27p14hMeAmqLQa86JTrn6YdAVUJ9TcQzS3DUTqrfd38PZ8",
  "key17": "5J6zwiLBHqrTH9DdBtYbv9qamDaS2uj2r45rPQLucrd36feFUz1TQHRWxsqV8VttdnwFqMBUKqyEYWT6HD1oMvmZ",
  "key18": "GSUDa1Zeeh3ykvGB7WubtggbeU7zqZerNBJRaKrLLgx5bNSPUJ3o9jo9Uu3VYEtP6tdbrj5YGTgLZZ6esBa9oz8",
  "key19": "5w88JcRymYKQsWYSjQrAsAV7ZshndCLexvx7w7HR27RWbS3okpVs82uB9tTtNQNcn3e8NSaZUGwbmH5QmX9eimyx",
  "key20": "59s9JAun3ABmrvDfZF72d5aeQMvM4sKwEPtQGEtwpqmsGvmJ5MBi3uS9BJASJJKMx4yGe96LGsMGoVbHwRgUCrLb",
  "key21": "5aFHzhnCfTjpB4SzGkx7mpDsdaRGDKB5sFr6jwGvNzyhrLY6hfP2wAyqUSUx2nes9wk4ymxDkJuAnoEXPSv5Dy2b",
  "key22": "2F9PfiedG94gFr95bQYa1U869mU3jq81ug9jVgcRKGu1bosrNUc5ch3va6rpoo9J1MrkYwd3oNHgbJqrLGaNVwZK",
  "key23": "4ftBxPRFAAxGAi4ijzep19epjTH74Aq9r3Nvwr4j1ZsYzKof5BBLn6PL79yAovicxXqGMBaqQfViw9LC4Lq4sDwK",
  "key24": "drNp8ZGnZZmsEENFDb9cMvPk8C8K5XfctCc2oELBW8FHw1SAFuUaw94j7gL2gQfdbAU2DTBssATPnz6EGTjZvUD",
  "key25": "FxLyqNFHzUkNA6ZkvrRX81cezbVAZuPCG3ud2Lk7AAvFHutMwNw54umxPp7miAzdjtdTnD5gJNWMBoDM8Eow6X3",
  "key26": "49fhtvDReXLgcoToQUu6dmbhPQJFNSYveBvPwrrBksHRqV9XXL2fa8yd2CDovYox6PaanzZKakpDoWdsRpMh4ZTU",
  "key27": "26o4zeXkG9emcCqKZBGNWvM1PhHbg1kb6tjr2jHENtNCUweiXQv49mXTii63h43P1kos4ydF8nezpiJksiGq26Ls",
  "key28": "qMkjVXDB6oyniXjUPBXq35TQzhHPyuvCuvQ1WQJusnhnRcGVfHy82HyF9e2NGiWS1sCk6BAMcrUXMKuQn5bjwbT",
  "key29": "5pEUKZXEpAc1gR4ivz9ajGTmnopYhTEeyncMmQWqgeHuUfp2fJ5GXQnZRoB7WcAmCmGKa296yz1wwDj6z3VnNa3a",
  "key30": "2TGcipF2t2FRNDSrLiSq5qyCx4g21n8qvPy83zGDMDo7qgZorG1PbxxrKpoA4z34tjuySNNZrcGEnWNAEr99vbUh"
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
