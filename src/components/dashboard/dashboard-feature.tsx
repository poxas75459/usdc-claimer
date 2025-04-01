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
    "4iNghTV34VMdR6TuF4eAc3xws4yJNUjtKmJQfgfRkpiAZnWyhBVHtk9JJPiHGYFKvuYiFTDdKs3hFQgbw7piCPNx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nweyEJvh58EZxbrNfyJRXsuxAjwcoj7EMXmDkbgk17vguApgoiJU4EdXWSqEhRx8uwxTgPCXgmf8qeoAGqSXh7R",
  "key1": "2ZUULBipf1DoBs6mrYKNX5x2vikGohTBAo9wKPozzGVKPFWVUnZaXpLLdp2oSdnnUNrE1BWQznqG8bgar7EyMDx5",
  "key2": "2pZ6Js4enHeojsWyUvD26uHv7gKoUQ41c2HXV1k58xRZ7nBonqgsxHxNZZcMmu99R3gn4wZbu4pC79mGvnHyNDn6",
  "key3": "5BkAD4ckMp69QezRKykdvgqaJr12tawXkT5YZjCpGgHxNXQfYVUGfByGSgdQKMSrX1t8tBJzponeVGhoXoZorgJJ",
  "key4": "5sTWfoJLF5MrG1PF11h6jj9Rfq11F76QeUmD2NM2Txbr9aaFCjXMVpPLkjXpRL4SCRmQTbcMFvKw5U5y5KWPwzgK",
  "key5": "2qvo5CrpanweSTnQ832g86dpwgKGUDcHsAwb16cHMc3fFugiiGwRT9TmNBAU1UQ12fczxQAkPRxy8KV3NnN3o2JU",
  "key6": "5AedjhqNZvtQSc9THmhHZTizGM17jXHe2vM4tPudZa3dvcV832SFyrrmYUvAALMTLNPmq3BkqDHvwmqw3xF4TMgK",
  "key7": "N6JBGRZc98FXErFhRZwvMrZED6RjxsCyKUVhVoqwm6EwupppfG5iQG9V4kJNnVqWWXZBEZff1zTVjFZ7r9qU9Am",
  "key8": "5g5Gh6aR89h27ZXYNcA267ewTQuwHfyaWDzH91ktEJ7BKe1RbM23tEpjh6Ky9pSoCbmUByvP7WoP9ChwJgwEHiH3",
  "key9": "5N1f922x8qJQSNWk1KHaPmpP8PwLWWEEYhjv5TTw8F463HLF8xHZiWXqJUS6PHQdf9QTFXVKxnQBTfZe63opfziG",
  "key10": "5XoS8KXyQwd5KVJt8zmVUBYiWbfUguq7djAzoUKiVuvYNXkwikWFjrSGQkumQucMn5vcAvT8H9ZbUU5AH9hsp16J",
  "key11": "4ppT8RoKcDKZRsmQKMkzu8JrLFYFh8X5dJAMuFbxsGSAj1GzhTrfD8dHjfSPijWcJbPEiAeRYV8KU7HCWkFa63JK",
  "key12": "2fYUrkSh96dAN3wiZyUzEJCbvZzKss1VnsvTjKUtKSTwWcQ6zDfaz2FqqhZ5tgG9yyJ6rb6tUFw12YeTbuYLCUuZ",
  "key13": "3JAgQSUnYyiMSgSkLJiT81bpwejCKdQhahdiFXAw8PfqujQaURdteVnyJYBWSkQqVA7bPnjHT1VKsnUdXcfSS5k1",
  "key14": "5ZbdD8xEkrq6Q7zhMVivMNLcdoXa7hjAvFjWwMYEy9JZGgXW36yF1e3fDmu9wtogs53GwNm9viq7JgTo8AQuEpFU",
  "key15": "dNFrks5yKkQrWcJN7L8aUWgAxLb2jEvWRbvcAKzjcDP1orhvC7HNhYntLDpkaK4C92MeDU1pxu6dGGVeBA1AHEk",
  "key16": "9F4u5XeS2YTvoqxyha2akatyruUVawdh7ou3w6XXBntadYq9R7JhwfGYaQpTvuKbLABsJSUmQ7EgXxTJ4B3YCUp",
  "key17": "5dwJAspZkw3N7q1MVSSh9EQrYo5YJoBUdLUW3UL1QRdua36jWrGABTEQLaRiN4mERRpHyXJtUJ42V9ydeo9EjXc",
  "key18": "3nopcmmBncTWFrwpbgCtyCY9XLLRSYddDQVRxLMktAYGXUwa4XHJpXfc52rFv532fy5pc1CxMGLSBe1sruFSh37H",
  "key19": "4NP1oCceJC4YnES3K5PEpGdu8pdb2cTLstgCm8Q4tU2x3YnXfhiXhsmX27KGg4Hv25dAoGDRRaWWNPNxf6AssibC",
  "key20": "yDEUaN7euRa7R634KfVWayqwdr1y3GhgdMxj5oMEBLWqD7HytJUfwLroEDKmEgxABA3y7pxcULRuJWu9nfBHNHH",
  "key21": "45TfxMnthyKmAYw6UKsMqhtkwq5aGM2iPmUrTpaGQjV3uZbsjCybA46GHKbPT2GP61oV44krzGcTkCnk29cUCpEn",
  "key22": "3BHufrLbuRG3Di8n6FQhoM33ujvMwui18GBYEPWG9GJmkQ2SL5TBAErbSQujeNmUWhpUZ2hkXSga8w1NN3ij84aF",
  "key23": "2kdPHJQ4y7Qa4qr76442SZhiqDFLNobtfvVLmysKag5BS9R4N3J7wGeDzKUDyyLsBG8EZ4yYzsm8xbF3m1JCbnnK",
  "key24": "xJGvsPj94akjRYS9SBCce49JshxYp9bUSd3Bv9wnYRmMwT58oEvGaQLbNuQ617Ti2Eezk9iXJwgaUPFwAq5Uc9e",
  "key25": "4PYycjoNiEwty4scfudeDNqUqpsJpaNxUWhCBNLvLhFxkLUFTpMJNTAzrXq6ZG6D4HDtJjSbNxAuBEDh7zxyV7uB",
  "key26": "4upjCGB5XPuHuzAWYgSsZSJEyr2xRezuytr94K2zJwwgkbZLS3C59JNAxGZVBdTkFqgcS2njxPH4pRpnFueaYPfN",
  "key27": "mWzgGNQPctxErKE8jUxUsdCGhiLxqFCi3y888i9L4Z6N1rbCokWtXwXuw4fTEFDj2PPeBiSswqca8tCtKT5EJ7x",
  "key28": "346xrSYbQjvkPJzTzBSBiXsDZGjY5zhxktT8pkVEWEndENB2ikrLupiBQwpVR4Hz49ZjCaLTERC2ij6Mdw67JxsV",
  "key29": "CUwB7W3xjD1fiimjQ2MM8ziwpi8zFjsx5iBNVpEj3sHLH17Fyk8XenSfXd5VzJtGn6k6hpkHmvqhmLJJkFXPVGt",
  "key30": "3HYCWSb8VxLjCyBuMd9JvVmiCmpBJp2N1JHwTwPFxFoDdny5SoQSYKyaqDdQPjuqqiKn2RcAJBnsvNYE26G7i7zn",
  "key31": "YdBpcWFYS3MWQs6RwBevy3Se7MnHa4Zty4KoxuqeYmvESfx2aMeSBvhi1wbmXGEUCT1yxSU6dLTS1SDwz62JjiT",
  "key32": "4m4VaVxPKndzP7dyiYid9WBYA2KURhFPatGiT4spcznyHT3DteeqDbCHV3JpDrZ2tqK2a2mUhQwyyk8vkEikn9oR"
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
