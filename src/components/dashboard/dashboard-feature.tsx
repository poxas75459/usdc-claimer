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
    "5WmwBgZwq5txJHfjUALWqoP2HQAs3PcanwsFPkTD3tbcqsmkJvwyBJzJMdx4aTxwJCZ74D5nbNfuogtkyvuMGPJD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Hwieb22dwX4NPHtyELZMcH2HUbRGT5M2eRE5vbjV5vem3EgXRHSx1SjEybL42VxjfWgGp4AaW8yR7ByAFSRNUhH",
  "key1": "fLC1bx3xzxmRna57ACieXwAKDdjNneMv376syFCUNuj4H897PezBna9cHEog7r9drbYqcuLfQTvX4YsWXmhUcqQ",
  "key2": "3kZTfFxSSdB69sLsR1ioRHAtewW5iN3Np9qYZrhrNDadTovnRZUEHW8XAbvrskjYhJajMYwu2TnxzzwfqtbpfvF2",
  "key3": "4GDxjf55ZKwKxBuiruirxpcLcUMBAsSENXHWFv4Y5GwwRFCwA4UVS5bXPupwhfbgDDkvFSAfHCCt6PgnwVKQpcmc",
  "key4": "2c2Awa2g7j1JHSZhr25HCAui2a9SrCLStvYcJNuJh6rnPF1tq9Dj4FhUwHdFS2cYEyw7ugS1NURqhbwEEBZotuDz",
  "key5": "a4QWk6RvUH89oqf2XsxxVyANLCbM22ViBBL9E4qAiqov4bB3DhTFgkSEvMcmYtRX9tE1bmVzPGHpc8UwsTM92MN",
  "key6": "kn4JGWCQ6ztFFBawfCxeW85Qu7BJcF1Z4k31rcfBnBzXQz7ykcsYDn4776ZQtYSMA8QYVWwBxpFyQzrVQz687cM",
  "key7": "3qtyqSATDbyYzkmVUfYXGwoM4VEVk14T5hCepHT4Z1rgaweUku42DvGW6Hftg2EEvRxvpVx9HJVemDDaMhGHtRGN",
  "key8": "2ysU7kaW6MytdG82zMEe2XXMp5gc3fopdPPyMMF9ctp6Vn1KmpuoQdYzNYfaCDdbmKh6k3p98RSo8veFAm6cj8wy",
  "key9": "52ioqcHbySXQgdEMGznh5f4Fgum1pVSZPdAqwNUupEVfTHukj3vjKhD1x95saNX8XBHUJ3i7FSs7nnCez35m36y5",
  "key10": "5ve9hn4c8oHFrsGd3VbEcAnpB55LcNmc3W6xPewzXrUjt19foAMa73AsoGJRVjG17JefhEN4PUgGhnqLZG9F4pak",
  "key11": "4PU791LkCWnvGMnQjRo8VSPSjEYGuSU7yi144eAn4pX5SK48NRNjjf7GcuLEjstjHjXzuF5GsTmhBP8jNW2gd6SG",
  "key12": "4Zqwn6SMX4xX1DGmVmke8Vq5TBPVQet4NC4Jm8iEwPLtzXuFDjQipcE9yhvFk74E5M3gWBSNRZjfia3HuVTQDYqj",
  "key13": "3AdRmFpbNLk9V1v2bSLGnmMGhcaspcZprThqPG11KsLruUUba9bqAuUdutUP6wKJqNKALQGw75XW3zAQqAjcHLU4",
  "key14": "3dX31kVw5B1H6Q4QcVNkVeEvphqCEAkPfYZ2rcXPV2sijjZo2kjEb7XzEf6NQ5gGPJNzuGagbZprUdqpds2MjeH3",
  "key15": "LP2KpJrHFX8SZExX3qH3FcXDfTk5nvZoG9a7x8uzeG4mjDftGrZLktJpTukQfgxXTWvZMJ9STb21QpgDHPZkYLU",
  "key16": "LW72yA4QWywnkXHdcKj9V9pDXNuhJKBeRJSzzu12evQqF2amCekNXu95iaSezyedaeBy9LTkqcqDjqQELTGEQAs",
  "key17": "4ihN3UdQ7Xe392Q8T7AA57qmDXRqJk2QrdUSjiS2LPG62G1ffVVFwCAuvq7ip6kDcnFeJaRp37RmjPekx5Pg4d7V",
  "key18": "49tdqAYJRFam149k89GEEpjfud9Bt5xQXLHuqiKzdzb7A1rhYTdUR7KoPQrgpkpcwyNRh5ND2u2VJdu7pNHcczQQ",
  "key19": "4pdCutoJzmAENVTDbrKkZNj3K9H7AZq9z8oiZ21QmHSKJgftCbSgiBpu9PBvD5fiXjqKsHEYetSZ9xihv6t8SKVo",
  "key20": "5Z1DbgfDtH6RKEm9pFLkoBu2hkMmpnLy2RbuwehF5FNqwkGRm1ap3RYYDLUYxC7tcvuiDraYUCjN2Rice4MwzWKi",
  "key21": "2FUwW13oJdAyxDA6kNtKjSntnJRV1GNwGq1tPwqoWAu78QmPqbyAZgGyX5Z7g1R7p4YQRN27v2UsVRd2efeuSC2q",
  "key22": "479LLDexhnGbK4AuGcmRbB8JyhGAHLx9iDmdE2iFtwBEAxsfiUWTANnfc6KmKcyt5gcHbngK1LgX4ZLfs3WabqXZ",
  "key23": "4m8rsBfZNLoah6n2YSJEUmELnSBjiR9CvoQ9dUTSXC6Nqo9YeShT2nUVWkYmdz4NbS6FoeymqMHeEFBcpwWJHUaD",
  "key24": "3jZKxfBJJRgw5tTPA47euebmZSiFQadQJvxZRdeg3awjH9zrTgB9vMrfQAG9DKE58sWRipc1jiLtvV3AB8Ek868H",
  "key25": "pAkidQGfhg3tUfTfM9bdSAMYmPCduSimdV7jxUtt5qvaKg2oFsBXDQkckqzEQweRL8a8NNBZ7nRyAWpthQ3DeLx",
  "key26": "2V58gFjqGYvD3qvQwq9JZetKGfdrnZVWdU5EnoesYpFeGG2P5wK3HxZQCsDYY1RcbSiRPRKHHG2Jap5EpTmyr7Wj",
  "key27": "5sptHjZpjud3wgW3rr4A5qRAtWgenZSXQW9szGNdat8zydhwde2dHrkzQUyK2cTifpfB9vmXsPJcRYryX7Eh8mBL",
  "key28": "4KtcSrzgEh3NWm3XQ3zVjQUmTrvWabFKDXNoyZtQDNunfhE86zQ8bRt1WWAF3i6AV3tmogmabEZ5L8x9bFL4pitF",
  "key29": "HqLoiw1C1wKCWs8Z6opca8Mw9pMUdCJjRcfY6xbqpypb2j4mf6MtLyUzfkuDoYKH6kfvtiHWwwXSTJEFPT16bQN"
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
