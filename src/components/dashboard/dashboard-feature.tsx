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
    "5owD54Eph7Zzp3pqivSBjAo1dHjyXYDgxvzHXJsFYn7cuBLhWhLS4xRi8E7JJd7mwtZz4sJBiK4qp7qh7UrSky2a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GsPydD7QbVLcbHqA1oKE3dSwHuLvo9fUeRnz8NaeDEUe4ExP9uYpxmnCGXARSWdb6e8rLeDHKjQTUxkQtVBfK6e",
  "key1": "5JQJH6jks9inzJ2XMhTt1wnHLz3fCV1dhchyR1pjAxVd7qgqDoSoYXS6nKP6YFgdHrSSKeBRy1XsuTRmzNrNWney",
  "key2": "3rs49Hf6yy86WxJYf9sFAk34iywbucNUszaY1X7vXg1ZcfjzvtqwFQbhs8WtUoj4xBmxppEYDEEMv7bPUhNQGcVW",
  "key3": "PwnQf3vRo2ETMawNSRme8enj2F13zKPjpJL6Z7Wa7awfdJ8xCDd4sjCx33oEmk32wZjHPGj23NcM4Xw1Mo68J8e",
  "key4": "LuYb1gYfGczWsW1t2dECJhvVM1fdXvcXMBr9Cg4oa9R9iZz78htTgApvHDbERvQkzZD7TKdi8U9UL6SV1nPxLDm",
  "key5": "53xVthMjQxb2UjJ9nw3LEVr5Bcm7NEHg47VkBV1SE6JzTQJXuf2EPbZAu3kvJUFNRjN3SNqsU5hVyvDysE2JoW3B",
  "key6": "osj67GAsMaETrMK2MixLtLosLMkqAkbGkEhHArV3EK2aB2g6iZKHUSH6LiPb9D3w1cC641oyZrUaq9Nn79XEXS6",
  "key7": "4WPcPpZvsypsSA95i53p4HLnZ53bb21NAvDxT5g4uTtV9D6ypSYPiRN2DTzBHUQUfcN3n27yyiSGmrg36Gt9DfQZ",
  "key8": "3crd75oj2o1DveYv4R5gy8fTNU6iVm6a26i6EkNxRkjU1abBr97g5zPA3MdBg716XKAmWiCtVUgz92tHmoWbjRhW",
  "key9": "3P1ex99132NCzmpu1R1tnx2uWPpUxw5vJo5NwBTVpWmtD2ew8hBPWHmKYW4H8xXsTA74bpy8icq7WEaqbEFGLtCs",
  "key10": "21XfozEuD4kv8V9veDf97ARpvHogyhKh5Lfo81rTKKJkNZW12W3iTPozjrm5b1Z6NUkCt5BpuwQjc8iEGM8NfWfx",
  "key11": "duqRRkcfQtMHfPUxpj621MdmcjeVoB8nLnsQpYhgYuyiKVwPTYsRcVzrTot6gC6RenCyvZmbKy9vkRvVSAMK5Hf",
  "key12": "QcvpUgUcXfcZoRjW4pvVAjCEPY2Uv2gfkdtksJSbDL3jnJSaUvUV4EkkpUoXU72jy9cKV39hMyRpqzY99ZeAVTx",
  "key13": "5a2QgGsxKFvWRoymbSjJjicm45kYrTFpP77KdxkbiLehpAnvgVohrJzbXmu3Kw7SEZUpdPKTM9f4BUHC4RCocLFV",
  "key14": "2AU4PTi8rERJpyTNPuSJ7tuRZWKD782X8y7rareDkTeb9DND7GFDz4zoctSV8ugAHHQG9WzZ51X38ePgUqJsdWMF",
  "key15": "j1CQ8YChMFikQbh1C2ZYRbkPkQgLJrpr3ifW7vuC3MBSToFBcQT7DKuffo5tSRXLCf4Fu3SLcK6NpQFEvR4o1Jr",
  "key16": "4y9d2dbfkfzX6z21zWgBFto8sYcaxHeJahf8RWJHjaB1yb168yzwxeVtYmhUexUCduMcm1AjEJzfJntzhPck5x7S",
  "key17": "s7HoaK7nkSLyoqTy2xsRASCRrK19X875mqguud7WB8RSZJazge81uRYLumjnAx53VPLQ6u43FCQ4LFLovcAiNzi",
  "key18": "2SyQ3RqkyA9bZBVgo1Jjtsx91Un3eHduHZ6TSMr25hbwgBqg5YVasFuyNfEy3Q9G3uuLh4WHnRixiADunHXoXQc",
  "key19": "38N9pbECR42VSwwJDBSyRUPiodN5UkMBauxyK6NtSVxoWwvpy2ygX1Bq7LAsfYUR7ttVsA5wxGmNWJZ1Qx2mVaMY",
  "key20": "4GdZCoFLCiTy18KQZoyfny1rBAw6wDiP9k3rtLGL87McauHS7kZTh3a627dfqbxBELcUHTs96HqFgTEPguvdCGJC",
  "key21": "3q8t5h8GwkgPFRboMmF16aHPCYnHDRdC2sND3gkAdHLUD8onmanAT6x8rUBuKCLwGQmFZsKyJhBckyMniHuLyGXa",
  "key22": "57DcyEAEtaddFVHKXH2sP2a6R2xa3YAbr9tSS1BBxGdaVHGcbwcY9B5jhSp4gNciWEi98txtgyyHWSPo3scsgxUz",
  "key23": "3guyNvD94z6FqVGGrKdKBzcsgjbsVGUrhRyEaaj39yBCKFMSkV2qskPFABocNZp39fbJYmVnfcuFX8k7oLDq3Z1w",
  "key24": "HTFNmuEHRK5477217LT1M17ixTbqrceFCrr1PmqBykTbY8myEJ3mKZtMtj6vrugSe69pffV6VHRvMUZi1vwfkMe",
  "key25": "4VAwPdUERUWGDUg15TiPviB9HgHBSV1S8PNEye7sBeh8ePCCj7t5eHvVyoLoh4f9Sv7CCsX4J7J9wQgBu4etf8vK",
  "key26": "42CnEGoU23bHrT7FxgaiH4FHp2LJ6yoyRrgx44JLBYguq24wxqFj4JY5455yKWxAtiUtmxKyZx1zHf4JhLWLamcu"
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
