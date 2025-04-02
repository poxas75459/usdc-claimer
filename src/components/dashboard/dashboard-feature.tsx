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
    "47W76WXP4Q61NRwJhsnxXA9xTewEc9oAqzVDpnkCYvfLC4x6qRHxPaE5hiPNwVKyPDPEgB6eVm697v6tLDf5co5W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53XMzzG3jpt2JZUP2h3AtCiXPJKpiTTtMPQLwKbEAfhCevCTzCqWXyFRx3t8hCwQ8rBKRMupfyY73p7siSC9yEDY",
  "key1": "2xB7jorRdMcqqFH8G2HgMuyXZUdZB1gEcLEJSpHhjuvF6mnBivihP3PkKFxxpwFWgYBtnH5aEBeiocNFa1PWJmtK",
  "key2": "TzGNY6RHCYZwEBk2e9h9XrXR9Rz5sNL14yoc9eRe2RB8YVXF2cLpq6cG3nRp1UUsdoJ3KMRdUsVM6FvsvLNJsL2",
  "key3": "5ss7FKj5g18656ET5bgTQQzKEV97rjwoCmdftnKgxkvDGj34bCJB7vdK6GMsAssJJQCjnp8ubjJ1oazVrzvs6nTd",
  "key4": "3MTky3Nzn67KDf2Kys53yw3LbUGx4atT764tUJkhRCHWKEEKmrDEpJVkyYzJT2jacaXrZHVLnrMdvsnwYt2gWmdE",
  "key5": "2DWJhafC8EJmDhd6e5wGFeTMUkQkTxKnZuxKHiCmUNUaTJLQJhbeXN72hXC19xna5mdsWSA26KQZD8b8d6YcnhME",
  "key6": "5YKj7ADBd4f7v7Q4KwzMsKw61wtBD77k7SdPPFrc31mTFzjEbWDXfePuRASAuXYTJe5NVqGeR81rM2RccMpp6GW2",
  "key7": "5n1dMTUSCst91WJ2aNGUD7LfMvu8FntYVBZj3WKkRKu9MSeZQfMTiqHnJ8oznDw5bEcQWCZ99k8ENatmFZFGCDAe",
  "key8": "5sFE3mCzsmSeokw1J9gqhLaVan8u4tBHAQujZPVTCTSL2GpuRyMeHkcxqwfXkqNCvrchGKP27HUQnZJDvJsp1orr",
  "key9": "2rHxva7FT6LJ3tRZegxHKwRAAQicL8evKGysACrTuTRZZv4Myn2tHK7kM7dTZgxA9TWmeikAKgbACqQgABwUmfCC",
  "key10": "5dPVWrnhccWX2ALtuqqy5sPuLapRCt1kZkYb7KtvrC9vNKpbHKG7vQnNqEyzZ72oYoZe6UZtKdVFw7zJ2q2iCs3R",
  "key11": "5e4MbcWxBTAcdkji96WGcLXYvYAu4LkvdjTG9izQwggXYBBSn2a6TYpxNzxuxHgvXHXZuVKZt1p1NksjrUKuSthu",
  "key12": "3yYS7Psmx7H8FtTHV5F4pxJHbsBj5J3y2e6wKjouM2amnLZ9LhcJEkcTrJzEz7p1caWgdmUEM7pPPcLkmWbxvMwr",
  "key13": "3VQjNb1xuxe8zLNrVVCng2dV8schyjFxpszN3FtpnUACLw1DvYAqtq5etxKbiL2noUTbotvyeKiUFPTuCCvApLCM",
  "key14": "2Xj6MS6DoAAd8nPocvUmSztMoSzG6nxiCVKoeiMkJoBnLPEvctrngQWvC84D9bAemSe22BEU892v2xVbnJPMxPeQ",
  "key15": "3wafvELKRrXNvtTcPX38Sw3EegyKSyphFwBcdT5wDR69C6rEYWnG5YKbV38swZnNLFYoyBc6puHVz5fj6NwKPV4r",
  "key16": "5AFG9PvtCu8tAULZvhJXPohsCRJtCNca8GrUqeHpLMdxy99GENZm8KqHvujtxVDutuop9yWShBWjGiMoN1cZxUgV",
  "key17": "22GeC3VQNyixgU7FJh2Cn5TNYRgPepnQYk4QLjfD44zZqovd95Uqrpb7zhGJGcdXpin4axrG887AGCVwy9Rge451",
  "key18": "2YbcP6Gj9SAaq3qgdLNTrBNQUaDYfruSye5Jxr1Xyf3ESihioLnPVdoJkvyEgxDtjKMgmNxZnUJ6ExKaRKnhvbky",
  "key19": "2s6gefJGGp5w9w4Kw2Vu1C68Q5HgMi49fb9jNpoj3xaJNCDz7PdANWG8sPQe3pAWKyHK76AW9trEaGmkQvWXdPuG",
  "key20": "b8onMAfvMxMZN8JDx2wpjTBZsQ2UbmGJsPHmzSs1QV6nop3dPwRehmUkgPszVQwz9dBenqmuKtLGD8dgX6npUtX",
  "key21": "46RbtFmTtfcspJ12aULzuv5ob54pv3mJjnrwHryoUfBkUV4QskMY67nLUFLnNEU68xJEyPr1BmSuJqWA8xmTCtY5",
  "key22": "GAmtZjT6ZbMRhUWDQqKnC8Tfn6bocAPe5SvbKh2zYZ5dtDpK9RuTrbcrvnvsGkVo5uwxNMw21sMEWJ2Twc2Mtp4",
  "key23": "3BuUj4to4J1TukaQgEYes9xR8LZJfPVkT1RDxtGV1A9oChJPfZcdy1wmmrrnjeAeLtKtgccnCjdaByLQHp7WreAM",
  "key24": "n6mENRN45G71ksoniVYkhSfsWBVUov6bDZpChGgiAqy7xcLaXehNDRKq57fKKif62nvF89pYkYVdZDtPau4HCsA",
  "key25": "4WePyb46pwKwfXKY5anzjRXmEGtZ3rx7rYPVxRuv4AbDeTyrpjeHvTk4nFB1vZN6v5Y6kPP8i2fu7NvYazRDjHNg"
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
