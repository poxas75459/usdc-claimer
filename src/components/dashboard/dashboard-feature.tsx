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
    "4ec9Dcxej35ACtCJuj1Wd95x6FuXD1yjZbUcusxtgWzrShGFpfHZsCiZybNjbGxWny2uNpV8uMNkXDevFWucK9he"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xHykEFro4XKUC2th6DvR4naGkJ4G1cuGtzqGsfuW2PiiHLRsXD7N525sQ6Qvt8whpUZ6CNij3GLKMQFkpiF2vz3",
  "key1": "5zLj7JDUVvA9bXpZsDYDVVPatGe5ptQjMZL2uVJXYbYugsfpo3MsCsyUwhUvDJ4H7yvDqCNEtuJn7ZX5nkHHrhMu",
  "key2": "ySByvqBYPBEE3Y4oYjd5RT47qtDuTMuLPS7T3uhi64fDQ1HmsMgSGaYdb4aFpK4ckBDKgvxZNKqRb2JdnrSZhYM",
  "key3": "4dZMCf9z2roG613hJuWsgjyRFg39kps8qYFhqT1n1aHLeMvYp94dykSs26PaqPqkpa7FpXo5Qj7F6uSeoqajjSov",
  "key4": "2gkFLtTEoxrfC7g7dAeUnVpys9aAo4WkAqBVEermbBaykA9cdXsXBAa7uR6CgdnbaxfHZmPhVeTUsg6oh9yLkXp4",
  "key5": "46SxVuuuCLuRnWRbtG2DPbxrRFaSqM38JW2uV5WeTrHGpvM6EDT5dwqqgrhweN675i9pvhoeF3VgKqW5QsdXhLwU",
  "key6": "Vfjmac4jh9d3X5F8aBeCuqcTKc9BCMX3dghmoGgkmwExkZSsFyYMMP7Me22ff6VRhqBnsK777BzowHgkmAKYvhw",
  "key7": "46RUyS3hmZrozVFeeW1frUkB6T7w9Xhx34eW7BVqphGXp7p6WULdTYxPRFXh2fsXw7ZtcPG7aym7RPQxNSWCNhJr",
  "key8": "3mvzb4xHnw3B35buiF9UiHFS82ak35oN4E5hJDd7S8QfBqcsAGnpZZuohZaEf7cPk8L9fpYFWzyNokQ3Q7GpQqpa",
  "key9": "4uQ3BPNY5USKtieaJcjxLjmviucr4WRbAYdyDqB39kH7ShEcATQSi9mr1YeERbNPsPm8W9KkMfyi2MpK5GUxE31M",
  "key10": "st1g8sCRjLyME8RZCmGp8eQijqZBMYVbCiBRvSEHZmt3UoWEazctwcUApTQ4rmBNrU89yBET84zUEpP55uKV6JG",
  "key11": "2zVdoFY4Xdj7Vnw7TpRmDkxwW8CUtEXKosMMgPw5SxG9tEkkgfsAndMR7i3B1aDroiW91LoFdzZqJhzdj4uiQJgu",
  "key12": "4fKRsw7GxALnJXtUbd6Mu9ExpxSCYZvqto4X77HRCcjcJcv6PXWsrV7YkuzuYsdS7BKLTTyd4j4vpgCf6BtYVZgV",
  "key13": "KubX7DmhfDdtSfyb6yyqfk6KSZAGPU12zmKBMtKZhCnkJzBbKUYKKU64KkNDtJ3ADq2n4eArhG1GZxRNnganxgi",
  "key14": "3RhGQxP9ph44pri7VU62nVppKY7V9FCafUS6FW9JWugrHZQJEYAUkbenBHPV8by4zA72pGT5i5GRDodFCGyMs4dH",
  "key15": "3YZ3sPm8BPTP9iNBgUphqGFEGH5bUAJoGArmLa8h9cxRR3yVgU51LBVfRPAo4vWe7NUhC7Z5AP3SMP54J4rNqNSj",
  "key16": "3mYEVNrqP8vL31xWgfqxagKTikSAsqphJGsdeV6wPYRS954HTmxuEDTrkpZSCjhSASf6ACUV9h4Awq44VZWrfcpU",
  "key17": "haefwJtuz9XUeTzd7NduMBYEYHg5GtVmWk9ddiTaSPFmDB2sKcBBfJD8Sok5WPYYEq8YQpWCwWWEA4GgAUrGsmq",
  "key18": "2yDZexoj6csp242E8q2K1j8kijqQ8zGGETRjfS9YZ5DrGgr6zttwTvk58MueuqFTS3Kguy9Hum5j23goZoaAopSW",
  "key19": "3cy9Cdq9dqaBYKhjtXMrt1GaYzB7NDzGd3j5nBej48K5x54VqsDMAD1UU8T1gbkCV89rKh7hbodwuv8iLmdTxCm3",
  "key20": "54Zrzgf4SChjx3qVojZVBKkAdvk3fpXxa6VNVaQ9S7hpvccV4yrKMAb4kYBQyt7Ng2phEeRf454vdNSdMFQxVjGk",
  "key21": "38DknsxF8gqAk9SY2QWfEb2LGjqh2SGHXmgwkVNpz3RTQyu6WeZSoTXLnUAmtPHFttnDXNv9Eto7LySsoL9zZ6rT",
  "key22": "4ATx76o75ZPpTBR1fTMSVyTJrvWRh1TE7u2rpxvJu4PQG59c7UbvcM2AKNEqUMM1KLobR9Ryjs1yvGArySM739kB",
  "key23": "4qQyPumuEYFScpvCvSfBfbiYDKgmpKsXw36kxKJsEHiXMHQ61MGVRZhfZLZoWUWPPLFFBw8W4s53mFZejujPZtLX",
  "key24": "4ut3ssmJ251wo8dTq5U1aFMwcGWzRsLreu4aWzqRft5d45SHA9mMCWTW4xFD4N6vrRYUTPgCozhKAsXK5RQ1L1er",
  "key25": "2cf69RipwedcmngBkjUQ1NTeWnh2S7wDcpQ5tfSe7gM3YDe2rWdDsadnE8JDDM9Ak2DQi7tZeQtp2Cd5SXhfbPxS",
  "key26": "4iD711QQSnPAJCBc81oTcvLyoLoctVhfTb3stxcE9GzzNFVVeW4Vc2v4dqoEGzBbxFvPxTX3cy5dxS7798npuUTk",
  "key27": "AxBLokqpyxUbL4cbJgGoo8KrbDgGBbhBidpUVCDpMKatSJ3Rb4emPbsYNxM6RmQSjn8uAss1rhsbai3ojRzXBes",
  "key28": "5rowoLnwpGErQ3z1BZoqZhhsdxoShVo3iimpKV5CxFxDHNH2mi9MG128cnkRJRuydLYxENaQ1t96Ec6DaoB3R5Hw",
  "key29": "5RuSSxUFU3Lh3c9pFjgTPEZ3qNdUvRKv8LHZjATMefPhdCJjA3pNtKJEfT3ALMm5Mj5ntTmrid755cUYjSc14Wif",
  "key30": "4t7s419cpSQUmLq1wGnoJTe3A62joPnafAY9TwxKT2PKGESkMgmVCceVMZRKbuGxMhd3AGz3o2aMiWSDZrwwhnTN",
  "key31": "jDnaj3puTzdGwdyrysPCuQe9pqi53sjKBX6uYsgKnBp8YuEv7yjUJ7BwyJzwj4doCoeSFx7W4t368atqN5A31dU",
  "key32": "3w67C3zCN5CNGoWbAS2QHjKDT3dRZKbt5n1eVzvamNHEcneH816iQJYD4xSgDDvRV8EuxSQ3h2Ha7Dop7Ydwzee5",
  "key33": "57CJTH1778rtSYvdh9u1jSEpe5D8LuXZtwMdcP4w7YNLJU8CNJzSJzJHQ8iC57a7mCMPvJAQvVQojBx92CtHLPtt",
  "key34": "44Yh11HoFcHinTsZsTgDTj3BW3yE9ZFjFpuoNXdVHoBHrEUpeQzgj8UWstDAUmZQcQqmxkVujFoYuEsb2Fe5yH9V"
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
