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
    "dtUvq1VMWeC29u46BSHpynpKFVBGAaFT12G4hhi73fvqUPntqRibw4Ly159EDgNrPBtHdMgogeVDThhsSPnKCk4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e7KpEAggnkLzUnzhsjKTtN5rhFZ2P4EH6F1VoVfHP9eAbr7or2ArkUVv9ksSayXsRPoedRvsQezVnfPU8N1A4a6",
  "key1": "2iKFWpYfmqmRFNP2agXa9DUeVoKBDSgjrR79kKbem4XMV25bfygXSbdUhqPSPVyVdu1uKmC5c3NbVDzHJR22vfvw",
  "key2": "4vg7VvGwQgkKiVRVebhgWnAnex78qRoepvpMSuTP7CQWdwhgS7hWee7PCAgubF8Y3FWXPZiG36BReKDED3xZHsGr",
  "key3": "34gSRQURCpDaAkWBKa81KR23LuKKLeBHMSB1uo6yhHHB9ud8EoQkfRMPMW8UYuNXg3A4yFe1sXLSjYbJXWt3AqZH",
  "key4": "598EnEndAuwnNE9WQPSEbiAcsdkUX3T68PwTUgu77ujbnnoQ75AeQNJKtDjWPKGKtTLJ3KdmichCnWHMmtTSZ17W",
  "key5": "cavfcBXXKbfBEcYWmoHtDaQzD5LRazrJkaUBVxSDypRJ914af2hvKWuiYbDzcUVYvzkMEcH5brHUoXmXraFjmQo",
  "key6": "4oLpxhRdEFCffcsyxsMGPWnDcJTUT8JNsgkBCZe99ckqE8ufAier75wi9vU67W4FSMpJ6WaKwTA4doDiDoiHrb9M",
  "key7": "294RsuM7cBWwxcUKTjGXaks7zxWz5Xz5SJgFXeVkx7gPc7QjjVhBojoFRyhaw2HoW14Hf6kZxNzGAzmV1jBVBwAS",
  "key8": "5wvjD7cqgBMEGT59VvYrKLMoAB6k9qhMK9e13ZbfbfUjJVJ2E3Aaxzf47afnFNQJGXN6iMbiCmxWm5eSjC9ZLuvR",
  "key9": "4qR7QL7J6FrBcwzkdqUst714X5VAjyLcjP1RLwuhFrN2EzFikE6vduc57Qkw7P7WQQNPTcSwcKyWh4JEXYxbfRQ4",
  "key10": "56V9C4KaKWk3NEGwVuiR2yRt91XPYxDrSaQ4GpejBLo4p6xW4zbJH5ZzdEx1GjoBnQcpR9YzBJ89Copp7ubGgQtN",
  "key11": "4c3i14b9C476dowiU2cFa38oa1Lwh4PB8Bi7MKytxaVgwuqL7vUtDy1RCKgaP1QGY8VhoyGw5YeqSxdkayv6F4Ta",
  "key12": "2bsQdLdNaXVLD6Xfe92tZ4dALpMzxew2gaaAZr4Wcqsjs4EFyKTWoHAzq4tv1c1hhGJXMh1sFZobvLFMfRqEVGb8",
  "key13": "43tvTSqAh3zUgWNfeq7Xa69VvyypM7mgQwRsCkseGSSo444NJ5tSK2srZfshH6kuanGtW8cjz5c5EYDw2K8uqWD4",
  "key14": "4HnrFYviK6jsNXCpAbqbKHUqV5sMeLBNCD5dFA85ggDTc89nf7g1vynu2RwEBfD6h8y9fJUge3K1QzUq1XFrMPLm",
  "key15": "AJ3rHiXEoa9xtoYLbA95rErHQ53XJG2f2WamjnxQaUT9Qup3PW5qKVvRRyoYNVn4JngTUGwXzhJX5sfeaK3v8Bc",
  "key16": "5kyuW9vqB6mVnvVaS3fQLjcL5yRHnawv2iTSoE3gZq39jZMESNeeN1CeqQNqxFTbqWCELnDwp7YGE7woTvtZmo26",
  "key17": "5Sep91MR5Xhwn7TfGtxQjWzMQa6QEK7CFFjrvjp8hhJ6XQdRTtUHcgBVxSLCeSnQMP8a5FM8UYMT6cSjRCqhvrTc",
  "key18": "4H5ED4PKH3LQRMgiqHCbuSK494C7Nh38MA4mT9T4ZPbBeAVx85RDMtRjz2R64merjUSkLXF2oq3z7GjAV4YdtTWd",
  "key19": "4zHHoKSKeM6znUccjroXEjbUgEKsApVD5djej1CcF6bhmjM6aEvkb2DxjvBKAXRL6TmXdH1GtPHbxTunYQrWXgL9",
  "key20": "3rtwMcGjDLdxGwcuhLwgq3RjDE2ueQQXaWwBaFJutAxrLkBNKy2tSqdp8cJFEmSjdY7Y64oCqYL7moprnXxgx2c3",
  "key21": "3BqCPw22x1ahH4i1qfRNHWGJGcwtBMKCMDTB3EwsJb5DGp7gZtmH8EGcLYJ2UY2W8CdESyN9gguvDQNGLAi61gWu",
  "key22": "67LHTZCL5VzVAeN5yqmBXT5XWpEm2vQAmTSA3KrDbj2nJ1fZ5pzGURELZ8FFDsHjJU5bdDnqmfaJqr9vRnchEWH2",
  "key23": "4HPZgizj9HJDq1QdXnZCUsL3KrSaki6L3b7KhunKTyLeUX9ppQiHUA6k89D3pBUffkuGjnACN2ymRMgQHcngBBrL",
  "key24": "x2iHBdBjxWx9gVbgBTbxZDkGCNQ5Nnct1Siy9mM3CCa2C72xMshPPTLDztutPgKP9EuHt2LXW8qPCENHwE8qexp",
  "key25": "UB13RiLuDtgW1DZS8C8YayzCW2YG2wXjwrFQrC76yPjS3AQ4nU5xyioQou7iig66B6gnPuxY6hWAxWvTpV1Tf6s",
  "key26": "5VQPvmkT6WNKd8AgzMSvJwoxQkGuM5Ppjxv34ng1dKVpdMvyhPPneocvAC9BmCr9jksSQZa5vS5goDCSVuiagrH6",
  "key27": "5UQuyteWheYcFv4X4LjDCKc2hRasybKfTp9QFTPJ9NN8pKfcc3KCncux68P5fjfsybLvvUu27ef6wNvLrGYHC7ee",
  "key28": "3x5AizUnzpCJvPWUbF5oXF5xNWGNfBdX6M7BCRKBnzEiYp5vaoDWTkwHTEUq6665GLUvtjKw39XWVbeQt7ZNPMZY"
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
