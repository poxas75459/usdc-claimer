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
    "4r26Ne3HCZE1EkqBDHyzsxA5FLVifAwzF75KJxaX9LqiiiysSfGrrugHVdmu9FYA5wza3yHCQBLBjLgpK39eWjrB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zuzzy5V29vL1bYqFN8FVoUuZHwgktKgNa298jvCvgVD5KwpuMCNkdYozzak8btDjU1eZae3FybbRKAEsunUZmcb",
  "key1": "N4nBwhHSL9qGwoka7D5sSUZT8R7MDqDHzwsfFSj18je1pVPTRRxPLbxb9PrJMC6ES5boGnYZvBvpcriZTgTFEiN",
  "key2": "3AuRZNFfm4iVYk1PCMFdCG5Eb8CYFFkx3Bqm1kAF86oCEU8ei1HyqrpmEqFEw1GaA3vC8vdRn4Jdx9tMJ4PfFMUR",
  "key3": "4juVgK3EYxVUvMKsDN6vUJDABV73r1c5cQ5ia9JN1HAKUr2Kd6f3aC4hDw82RNf878WLpQ3VuChqyeiJ4fHPReW9",
  "key4": "4Qntn34PEN8gW3w5w5WTeZCFPXWaSKM497us8krpJq6zSvwhibA8Yebm8keYthEnYFP4wKDJ2rZscBpxDHR9nmEb",
  "key5": "2zo3JYBpV7LRZP7hphTX79xvCdtvdkULUDZDcXo3goHvFZRmsBoW8CsUeD1KeAwBXVQ2P39KhFMHX865gDD3Sw4h",
  "key6": "65ZhCAnaDCBwVh5GwT4CEYnMrEdYAE4NKb8fYfyRSGTzoqEUtfuJjUHntYWLExJhybsAaUKxXPrjrMKhXGDfL8k5",
  "key7": "3SNY5qGQvEUYJZce6UWb1cAkSQXhv93vUUT9yeSbGJVF21qBbYqw8scz3FbZ6xRBe5wgUXr8KEDu8beZPaH2h8sP",
  "key8": "TcJJapiDmiAHkfUBhNH7ZD3DrTZUacmtkayJW2rjRMQKTQoPbP7msQmL2nn3iHEJp7oA4HavdCtNZvxCUmEmXod",
  "key9": "2WUXwLPCGY9skkLoKmoWyQqTKV11rxQkGXJsRZijrVR5zfSb3CmFRRrRCffYz6aYNNfjRZyQHccUYpgV2CdrdrnH",
  "key10": "aZ8Bg51gvsunWkojSZ1NAMxe2UpkNHeHuuSYWpBakPRBguTyX5zt7PzjLZwgmNazYhLW22QXTtLogyZFAznMEYu",
  "key11": "2URdfZXiusVKumi6Qe4zXuxtcJPqX11bDCn2pUo6cBwuSEU8Kkfnk7hvwvYa4dy17xYhz1e9sGg4NgwkDFxikLY9",
  "key12": "59ATdGky5XBM4gmTTseJx74cAae7hacDfu3nDdwLj2HdjXVToxVDAKYQJveuffB9AfoCRePG1zA3ys8Bd9VeYKAR",
  "key13": "hqGSSXnPD8yeGWWZMLNa7ZfxSG7497LoWXYca7E6cJAoCMyfsuSgJ3DbfoZESp8pQMm7uETxtiMzbPh7QmcGC5c",
  "key14": "2ETCiZNS5xJ35yfJtdM3wmXfVS1Hro2BQ5XseQWppY13HjPdNg7iwTLYVBgDv7JhCVkgc33eVgsmqQ5ioXBzL9FG",
  "key15": "2EkFEXPa8pEGVJk9GoaQhaskmE8cXegtLFMS6kywNLqPq444c5ayHXTQixGbFQZ4oLf4KTHPkTchwDEaFLjNiPBf",
  "key16": "3K1g9sUV3xv38tgdspgWcrKPqXomtR44jrYXsm3JajASq8sJ3WPWiMPf4ico5iAbHUbsJgLzJSGJGiHkALA2zNk1",
  "key17": "22rYzagiD26svcrB9demBuCvW9kz3WMPk1YVZxFTU5bh8Shd3msaeMzcJSkbdgDEjXxy2FKA99SHbr1uY1eKk2Cq",
  "key18": "4eKWDqnoYUAttomEFxYKveg5sEVDqUv9LjCGNDyGyCueEK6bhsQV8WefgoEM7Qg39rP2Ev4SrXzFcNDyPqS86Vnr",
  "key19": "2Lt57HwfMf19x5qVBg9DFYptqKeFqENF4Z9T4wwbpibPcG4NNJRAfmtmooQLeG521GqLk4251Gb3x7X92Q23AdNP",
  "key20": "4BzKyqTRtVyKbfJwug7gLjWJZhrrY2HJqaLSNPw8tx1rJRGo7buFF94ejfeqLJRhMbwVKbdZGcDX15jSxyMQFYuQ",
  "key21": "2E2gkcg9woWpbYwDyf6Av2ZBjoVgLwgMygYL2R78T7M6RfgTdxHT7FG2GPQNm7sqsHGVqxZaSZ8SNZhMTuvtqk7C",
  "key22": "5HCE5SYz2F7kXQky1exNesQVvB13vQ417mNPopewPZ9WUeJYShprJkzGdoQMYxYvD9BtpKGoojLoRgHP15gu58RA",
  "key23": "2p22LYvfccq3crsZDwuPkgScjwrwLjBfs7bs6wc7V127snNKRWTfFyWU2QpSEbiwDamtjrLB9sxiNuaygvqrPfgZ",
  "key24": "2wy3HFxW4M6L94TN1FiHgPHwNNiDHp2DVJT3XLLW9NF6XJ1FBk7AF37PLJu97uYMMpBuuVefq2AnN4BGuNBjyw74",
  "key25": "i2Kavzg5rDiv6K8YDPPe5YzR7RWmBgLugaNdctKSHdTXoeb6Lrrzu2NcLpfXRK77CJVGuQj6BnpGrRWc4uicCij",
  "key26": "5sizoqKzfefEb94pR4ATSNugB1YVtz4ZwWZ389EzXvcenyE3gcVpQXkQDUaKqdBM4NNQL5D9FknTnzwNEHRvKPnJ",
  "key27": "3BzsTH1N8JcawxRAQcKSrgsah9PdPdKduvvKbCa9Y3T4qYRbbVygzVyzn87E1r5mFQUXJBkqqLMnd6gCzGUgngY1",
  "key28": "3vZAfQj3vCti5QqbbSidpXo2oNaeosWkMry8FL1AqLTMyip32nrn84FDgSB9yXrio3PQorA6DXyiqYvMTxDQWfkd",
  "key29": "49LoUeNSkqZnsN96P2X4Gug1W9kDbr2Royqgf3AZUgfvP4YTAMzLBxLiVNtJnHcN82fGuEqsCn64ohyh7NNikAZW",
  "key30": "28xCKx3DAMvCizLcGDYbRhSK6Kk6WivaucUFswLhrBwDG6wgoK1KPQKbwRaqMgjkDxu2wQGqJZx8T7MXQuj8A11n"
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
