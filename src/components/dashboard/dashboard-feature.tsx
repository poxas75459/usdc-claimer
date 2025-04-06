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
    "2LJHu9eR6YZJPFqYTMkY8vrH2e2bsefGw5526YAuokQngKFHkwEn3R23BpmJ48whgFRiYuSNskb3uTf16SookApN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Lnzxjp58YFinUAzXrJBJnUXktRgD3AfFx2F1dx5Lx16wunM2PssnZ5aE55eS9Pndryax27QhTgh3yQGNay7phjF",
  "key1": "6MMUoowtsw3CTpEShCVXgtY4SANxPGxMQ1feB4z3q6J42FUSTYbr55kdx51CwVdoDpVgFN5KuRqr58kkGsWkvmk",
  "key2": "3B3qy6KT5jL7XZk6dRndzbAMcrcncByAM1gnjPbi1ikeMsfpkhNpPXZQ1moyp11NSQD5Abh3JtijdHPt3MTGhNco",
  "key3": "5L7T7U77hoAzHv41tXMyNbzY2wpMTCA96Uzm6e53rf7bPwXV7rXHKrjkgfMsKth6uCX2CEeZNodTvqU9iWwZdz8G",
  "key4": "3XfbYhtZ1oWeCc7vMRwfdBLZns6meGW2VSUErQjZWi2WYcF5JGkCQUw2PT3iKv8quhMkvZSdNBvfWXNSnPeES1Jn",
  "key5": "d2PXvvdu744MkyiEoKckEaS2ju8Y7G28iSowiya5BcMJKzhAadd1uGSEDrLuJxpkpUrmacLSVCVrEdYNvxd9JYG",
  "key6": "XHKPncu6UP1eSnSuQpmYiAw9Q6Syn6SAMsHJE916QoquyubLGtuTrgQDGXJehuNBthNpidTn5YbTt2aFZ9MuHHp",
  "key7": "b5kij3uG9rWaWLQzbGnfm5vBC7oTjjBPUC2wHxxzDycj7WxwueVDFA1smpe61LFz6iL2quTqT7aHMkPmecqCkNE",
  "key8": "39V3umEcRn3myUHtn7JtPA7F9DU1KD1akpgGQ9M2ws54vonmG4FXWRUxnBCdGSpnzvfoVWSASYPpfQF14Qm9bens",
  "key9": "4Wyjp1wRST4TFEBxPdiGQYHLEpSLhywxvkAMbxSU9yXUsxTiTYfSonT71vFECdvABHzFEbAaFbHrnKJZWXQuFQUD",
  "key10": "2jhyq28sYU19kB7bwDEGK7XFKzNU1rTheJrEK4NoJRdAQSeKJBv3yvtaTtyntUXLv5DzjVBiMGzSuceWt2ztjDz5",
  "key11": "bKCHtUtdYjrhgipcH3YQcZyE77UbFVjXFxaXR4MT5FYs7BvWt5ErQTxSuYfvob1V17uaoAQCGy6GuwHa8jki4y8",
  "key12": "2qtdg2457AhEYtfo1Pz7wb16KdHM6yp35VByQAMoDPdNSnkqFNj2nGh7pCvmE71w3d3E7Sd6gUmrt3eoRsFqAByx",
  "key13": "J3spXrwybDvj1wuDRiGQXYqrr1aVhfxYLCxYC18rx37TyuYpnNGfX41FgocoQmm1GWXrTZ9SFgNvw9Y7rGEMgmi",
  "key14": "3pZupxSc6MkERFiaSaXFPVUrztyY9xYDMaMbRCPh5GDU9ap7TcV9BDDJG4bhxdj5tPdRtZfknmNfV1wdMntk3iff",
  "key15": "2uo8bJfrTLh4Ya3PohQM55nUZQ1pMtxLRBQgE3TfLScx5qw5AJ4BoaRmGGPUUnz7ZBFqxX4JDLkMKwMvgc3pwL6X",
  "key16": "3sFsopTw4hkV1J6C8Rz8XroHHyz5EBLx1KQF9CLjcEKoXP7YwvUkdSRd9faGdqE6cbA5Dmrzzw3ZunqVnZgVoufG",
  "key17": "3TXX379pHWiYw2gkyR2GytG2x4XiGKW4c619XEiW3cVmjVX4KCoxvCrD8uRWHjYiShygc3YiiF8h8JfvfSAvWfHM",
  "key18": "dBhih9pErCvN7HWViofamDgkbCxFurtzhtxSGRnXgHZJ9jso5bqXHAH3cg56oBBiwrCBBsoQcy9wk8LU77BZBm6",
  "key19": "T4hqhqpFarmKL1ngbs9ooy7UwGdoonbfMYTZrcL1HcLHshKeSP3PJvHZpW9NctrwaJ1wXgxFELWnmBfLuvw6Fxt",
  "key20": "4XJZhe5Psg35BrQSgE9aSo1jfTA4qqyJj4bUKYo7s2JQSebk8GpHXgww5V3nqXFFY3JYMFbDzM5B4ciziGRqMiNo",
  "key21": "3UfANaLRLFgfvmoAVKBLnctM5PRThmufmZEJacNPW3V4dKUzqb7E72rqaFDEGUt1qYHCjDKjUVA6NWvfE69nBrCK",
  "key22": "25XYAXWH4eu1DQgoqdRgVwdATPor7qUtxyWtStH19pKQduzcXDwikshqUeTJZMigeddQFcKSuWC3cha2ZAvieMws",
  "key23": "4aq1VpZ7DsRQsBtE4T2TuhbnUgxLxqDHG2cDMVG2Ho6VhY6D4Kybc69CvCjy4ehDqCdjajskk1BgYGDDz9SQqHP4",
  "key24": "55V8tKgu2XBQtcWetDckKcW9mVdcm1ntqrHwegZbK5gMFiRdkbDVW2jhENm3bMqhrGw9ThP51xJiMLZQ3rmET7DW",
  "key25": "48kXxU8kU51tbRe9BRKoqj7cyzh58hJeVmjMTRz3yaBfG54pY6YdBeNU31r4zg8TpNrkbak1mvtjTjLvKistsFyw",
  "key26": "49NHkVKb4Bx3S73KAc1ie9buswEw6v2tXshA5AyFS5n6A3bqsRpVPFp1DRAr69yQumpGsd5YMZru35RtX1Hshn7a",
  "key27": "SbE976LnY8duEAB7XzCatfBzMtJATxucQ2ah8ouASMGRFoB4NncdzgVrGXKdJMBX5ax77oHPGZxeT7cj2bT9tWR",
  "key28": "4fuR8kYbKDLdV9ncrVjru9h1ypV7287qZzxGZ1zpo8x1jJKCa4ENwvesftYFNkcScmW3TZFnkztxxkdti9ZkX9fP",
  "key29": "2j1hCu6Q1X9FcXaELapC86QEkc1d8j2kAhSLdYAmzNcWyZWRBUPY184a2CyRoPX5uwQd8jqX5bFHHafM3soiQfMK",
  "key30": "535Qox9hRb5xDs4aYEMxQqbCgK7GjjC2Bg2vWPrYXznLXXxnuQgH1LGhhUydxpnvA3zZ58F4BHZMDh1CdJBBSfdx",
  "key31": "7qtAGLMbp3npxzptJoTvb8Dx7jfoMUSa5Rd9af5ygZNHgxBSJx5mVzFfpU2JFCGExC9HY1pZe1WfBqDNzZAxEYU",
  "key32": "5FWBZoxuhjkdPZVHMAhrfFVJwfybmU93shNb3UZWN3rbhRaC8XvLyms1qxDTssWYrPMThZac189VGbQ5u35QHkMR",
  "key33": "3KzgubpDAB516ZJ88QJDtXAysy1LXbJKevFKbDvsTe6aek5dgz5CJX7y5gZjTLYeGzs8zSzL8z4pXvgLMDNkPzHJ",
  "key34": "3LtsZwr9TMs3HztipropFh9GwqWswwr5aLNbRHQyHrs6CusBgwYdNGEEUVdVDH8X1ikBRvHdqJZ22h6hAD7gQHkV"
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
