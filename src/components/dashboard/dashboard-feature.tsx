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
    "5kX8RYVJyD7dqvNPGeyshEquwYdBWS3DZ7nJ4KtAoQ3YvTKPV4gPY3pSf8BRaqMRRpQNyTUhYX9CFWecc3t5YP4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cPzzYygoPHWgnRaMyhUbJeiy4BiZACTV21kBxj71RXSMDeUGLextT8hzcqZZU4EK5Xa52ghFSFNRkuRt7xUz2Zz",
  "key1": "3WCJYfuJcLPNiuzoEy7uAGCp6YDF57PDzUg4PrFwn5Jwab1V9bog7kXE2VWrBjXvcDm8pwewEUTTD6W9Mka9SPP5",
  "key2": "45Rw3oRGrR3Y8Xpe74L2HnwZwh8x7qxG7GpkjwLey8bmjzY8yVqZ1EptezhrGdo4goGHAhXUeSLn7tgRSuvhbuqc",
  "key3": "5Fd864Bkyvct6gBRhDhFPMTKViDBEr5ZyqjJXSaRGfXJGZj3fuS92sT19woQs3pUxABRy8JHuf2wC9AjYkuzEFc7",
  "key4": "3RqcXSdkwczQUgXDVhkBPRUWFyfymvJDUgnR5tERQ1YbfSZcB4NvPFjaosYyPEtc38pTsckAVQWw2totVoNpHhgT",
  "key5": "4JCaoWW8qg9mQev6mmvpSZZK9Tv2yenDv4hD5Xpsji9uBpHrsNwfKNXHGi5ShDq48WbEmUE9TBRkpsUgYJmyvQkB",
  "key6": "3ge2HQdFSjieBzPDVcLhtruZD8mRHHiLDEqKSyTAjSPD1vxZiHyFEFa9TXWdAKPAaknSZjVL6D17HsKEerqEZinM",
  "key7": "2NkQSCQQ7ncjTefaCzM3ptwuSHbz3USBN5xoz2WeVF1phj1jhFsR2E93yH7QedC3LLiNNVRLqFtwaZnyt3tdimDP",
  "key8": "2YD3nR2yPaF12W2um8N7TDtM5qdTVBELYtiiDWnasoZA2UPDM877KV8CFfY6sdmwaFDCj9x4MJR4LdDnTkbd2aRV",
  "key9": "4ZrXExiEzNB2FcjfytcgmHeuCUVdVNdUJTxvuroWf2kWXKVJraKC4SaNdGXMzA8qeKKrfF2uRLXAtftDUhoSPBDp",
  "key10": "S4gYDwKVcmmdPhU9txEFBuvtGVHBSMK36hPUYds4j2Ckcm8PnK8wvRFG9exH6ouF6M32KLw6FMi57jm61bEZpK3",
  "key11": "Pe1iRn2yvhArxsWCHvXDetCienNutWrpNa7aU4JsHmTXYWhPciZyi5hEFsym5Nsj8CtFoHHkL3Yujh8SqPLfmUk",
  "key12": "3R4Pn4mh5XFrTvu2zMEZLwyQayX8hQHGkUfX1SFo4gFsypkw1gyMu3TRf2LaeDwctQB9EwMNmE4W7n96PxkpxE3g",
  "key13": "5BagSo5SjdqxwphsUPubh44eEhVA1D9RcMQKk12TpXvms9FusskTr1APbL8dPJa6D2cXE7iRvGm74VmCcJRAxw9E",
  "key14": "Y8GWFkzAuBmJpkMiPSotXmqPxfPHmFdakXTJCHbrvtfevt1HEVBu23zcq3uRRdYtorkFzHtQDGQE9nr3iSjG83J",
  "key15": "5hQFkuCRAipREAMgijnhcDgLvw7Y2vANG8w1H4VBbeUACMQkUXD2wSrxdsiX563S3FU5YdxMA7gjiidSujLgmpSy",
  "key16": "2sq7e4JG3JRketrcKpLR5PLcyf3kyUoC8RQEPzUzDe4ffD4tmAgRAx8yF5kzGwiTMAtt1PzPNtXiiVZAGFHdmXW3",
  "key17": "5euaCoiCopYzf8SNZS41yWbWfz6ZDwtbPfcpV5QrsCdMLESrLhbGGDk2kvn6bYpNhCgrXiTzcNAvWiY6i4RzY4GX",
  "key18": "B3NMShZCDZY6Czyea3zedAT4Kno2Tjx8XeMwEkPFt8CAzarifR71SyaZ1vb98AasJonwB9H2k86txMw4iFjsUnc",
  "key19": "3uaxy45xkUUrHjQQYEiVg6iNXDn95JUsA6oMPoQHgje8wLmpMpZVFKhnTLeeAJg621brD2Lccxg2xQsCfbq3Gmba",
  "key20": "429ngPF5vqZUefDdwaqMD9uTjRNKDi76jZck3ozbbr1LRoCN4CC6Q4iC9mSchPpVHRFn3CsZP6wdkJFwZcnNX26G",
  "key21": "5Ms5y5RuEGroCADsca4sU3bmcpbhqeSUQ9cwqAjJFVpxXVu3P34H9oPthUdNrHbnUwBNxCqku9dRvNBDxTeQJR2v",
  "key22": "mSuWDqvfi4SJpPpqAkh5816ak2BYaHGEftKbncekPBJzNvVk8ht149bXbpA3qYbpBVQwmBDzgpvg2njuEV6nJ6C",
  "key23": "4En3eH3GghuC9XYWT7tLaDt2MZja9vZkeArMUrinjyMeBjJYAzzL5gJuLVwzetUFdeGFngHZmdEyvMvZTVjnJprv",
  "key24": "ngnwTYnMeEKcRFqU8DiQShcE1mXRFARhJEcNZdADJLBLAaz8gULWL1YaURrbFS9Mfq4HBpFbKZvXH6Ket1fosqH",
  "key25": "4cFv3aHQqNkKUkPsK4G3LFxa7ks4SbaVvS5SpypfkFo71eUbemFZftrWqDXCSNoFni58gXiMaxhaXB31Bka1bvNa",
  "key26": "5iCiwhxdCZgZ4CXvtLqpPXYvpVFRFonTHgCHmc6xLtHnkPsguGrXSELoMcMXGciYuANkieAd3YguoWZ8svk2p5mD",
  "key27": "62gazHK7HgTcsFwxdWP4vpftCtVRT2VfNwVXN87ijQGGToC15vbQy1UbXDcCzo7kjJkLmixngRaUWE5MNCwEhXxT",
  "key28": "Hnf6YdvLhGsvSwfJLFRpWD9fu3Fy1UyBzN4vCfQ6oZCP1oP4CVvKzQuY9y3fkjSC6JSMkj7ryfPrLj9nzXZFqDw",
  "key29": "kU9aoqEksX9mzyrdajhp39WC7RoBVALBEA2Ji4HHixWZMeuaF9SsaJHfS6F9ZJ2AJ7cH5U9Mn1mDutSrHqMg9ox",
  "key30": "5cdPE2T4bAMS2gp8PmspPCVT9Rr5fontHyvVxRykkDVBbS6DWx16SaHJ3yL82wNPTQrdjwmXg73rfcbXyBYuDeAL",
  "key31": "2RLfgrt5jBkfjUwQRhifLUjKu2pbhvBP8Vfv2aCoY568K64wfKhfs6NwJ9hALQrWHKX7gan5YeUaLtP3cTrU8h3h",
  "key32": "3gC7psEPM4VY9SYz3THMhFDXQz9n3TP2pva7R1n3ZgKJDjV2ApdDHwMVd6sWQhAw7wMWNoadceYTyzq9gEVfsRqn",
  "key33": "56n1vvcEXocuougdReVeJ4JtavFx9BSDLqsngxYRqor4HBip3DUGs3BE9vLCf4YhobUAYGKSwH1UdwpDDpwmp3WQ",
  "key34": "3DvTG9s7n4w8i9hgdAvWAL1wyGnBkz6ZohCtthUYxFTb1t2i9vJzQ14oQcA5uP8RpEFR7qeWQmxvThDyaoZmPCYV",
  "key35": "3KNJ5Z9MzDNunJdd4CnVSLYGpUGHD1W9RXLmaZ8TrduQDzUuGd3GSRgAdo9KHAVNZhhJvsuYg9UsYqFAVR7Hyqvk",
  "key36": "sN4s8UtCnQESVLuw2qvQfhzVmGqH88f9s6TNuNXCBA5g4vR3zf6mBfNXcMeZMheN2EUG6W6dcRFTGKhUvNYuV8Q",
  "key37": "5uFqo9Po24isd9BvmUVVszu7VnHK86DKnuzCJpX9gtCWtsxHBYBXPV8g14qdGjRahLYy49D1KMjV4Q1vR6goKyKo",
  "key38": "5Kx9EYpRsbeAbc2vWnS78wkPGmtCK2DjP785QrrKrDq2nzdmmZJk4wPaN4rJSQyfF2awXRPygbL6PuqRYjx7zwLg",
  "key39": "4njwUWhNn33BPUwnwNpfWNJn89jDSXs7J69HhwxUATP91GeRCWKxGpxui5NwQ3Mfgi43FQJgddK3kCeKgpF8kuRo",
  "key40": "u39ZaNK17JdmyaSh7UYWXvYFUhFd2BWmV6Jt8jk8osvckovmfzDCW9KXxv6bNXdXu4w3h437J36Rc9bUF3TYWkj"
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
