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
    "4mNuHSBPfEWLfhcAzyq2oaNVAG2XTFWzZYYQXkE4cuWsLD5fctBpeto1hV9VYVpGsA1dyCBSyuaVbPcJmTaJGNZa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u5nQM27rp5WoxvJiLp5bVErJGiS7jznqERbPLTfTm8FEVtuWLVUjdsbq2nD6dm3xsRpJCjqJxdUaPagUdBUrjtY",
  "key1": "67KeLupio99JoStuspuBGrt2pfucKCjqLYryxxBADDVonDv5nGwF1x2QbrHKBqBJAUC3EFa5AdSYwwKu99Fq11uL",
  "key2": "4jxoAfRuKfSffDph3Tv8v3jG7Chj1AZQRpjGjtJuoxzqBk8GxErF8W15DWkZaRbxiLNC7X6yksscDn8AuHWv8ZED",
  "key3": "vVTR5sBHGsBBWNT1FDnyuVthrnxxnG8U7Xoz1XYa7yW4YpoRX955CAXf22CxDvyRBvJUeEazkLeBJPZYKGZnREt",
  "key4": "5vhGNwDNf3BanvxL4VkGpK6ZVHgsgDqSnTFSraAfTgHjvPNTQTth1ZWuuqnxRuaKVmkKNPj3shoBbPZrK5VeJsvp",
  "key5": "SmbA9VQJMihBjmswsnbwVh2vJLMKUngNaXCZ4jT7TMcNgMVTuzNww1JzuqawunX5epaUEvRhVMDMcroHVBh6c8d",
  "key6": "5k2zHtYthDU1y7xh9M15gudjiuoubtmRQ3NisEMrmaWnHrpftngffRdK3znsqCaCzbqkeca3mvTz7DD8u2DVe3PP",
  "key7": "5V8Dh1cvdxpPNzAM3cgPjbtpKFRSoZn5knAkp31378xsZBRVcxXmhvzPx5FtQ3jY8BDk6xfuhRy1WMWGymbJMUZS",
  "key8": "4YSG1upnCPJWKbsHPmvGWyP7du7kSU9qVvSWriSvLmJnJNpwE6bnQNqBYCeN2FMWGT5FZX3JSt8QerY4DCSJDgM5",
  "key9": "3DaVc5UR1bLxGMoq7hL84eUgNNDZHRG924fGYRYqEXjJMN7WBxu1TVCWqE77QmV5GrucQeud6LQUDwFBwfJ7CEXn",
  "key10": "4bWrR414EXdsYEzdNuyFeKwRypRA49f5iUNhx1ej6bB8VXpGQvMvZKrh1j4bjPgcFwhSZBouSdrySUN1XMUjUqtw",
  "key11": "5bssew8NKyHVjszXSc548PtpcdotC6C9TyJfuJhh2d7mbvJiL2xQ4JYF2oTgjFk7xMntxJMpcw7dD2obvfrg7hHd",
  "key12": "44PvE6dQGrHnu9gcHaq9BxiYgaBTNcLwXWzeZdRQrvSbxLkCfrLtemNj8qbheabVL19zF8nqf8HuBEsk55ymM13N",
  "key13": "r7CVex3n1TbdGo2sARre599UeoGDpuhMqt5TqCutJUuavbsbeuHQbEzZroVVdASGpjEHmj6fximdZBeR7ZGfxgg",
  "key14": "4JGw9UfnawTPy6JgC3nGcj8rpXWHouy5jhWCy19iTTdtTkZY7FD5idzQZ4DkD4E2FVEpQu7VNmm6sRpsLLZCaMrS",
  "key15": "4HMLDr5Je4GTZQG9bc7sBnBa9nsRncpefJ5rnqEczYViQj96iVDepwTafJZ91n2Nii5JmgLErVsFpabWWCDucQz7",
  "key16": "54YEKGHEcCcBjTaa3oSPZ3RdWcqaBp6qiBNLLiXbYr7Gsvjc2gq8vxvk1YK2VsmJF5rpvDYyYQtVYyfCjhEgAeut",
  "key17": "Av6mDxLZZM3q7BFnScZjYSYf5HuhJc6CiYNtoZFyEHn8EWR56obu65dnAjireRtU8kFo2ojDhtfNVfgd6yJdN4H",
  "key18": "5Jd3MRYgzWPxQKYaknEG8Krxmz5VFKJVumnvxxEQVgpPZatcaFnsZZqyBtnaKpAopgqtzaYwsyasDdFZsLg6bRX7",
  "key19": "312xMnZ6JuUH6w69UME4CqWRUmTwaMySbcjmLe5PxmpydK9JMZri8T27hQnMeivWcbbTNZGNnoHJ6L5XMDyqbCBM",
  "key20": "583LTQrjQEfd6CmQVJr3nZ15JgeV2owgWmoXZG42nC1hewDNoBTk5zAx7bzcZLV6YBNY1gMv63TMXxcKiMsTWF9i",
  "key21": "55hC7WqD5m5w2upuCueyyndetYZ4MRPuKwFEp6bpJZAY9X7WhVhK4fc3tExWjRp7DJgHRvP9QT3FH1NzcpmdrooT",
  "key22": "3k4ijHxBWkUNxwbEFZgdW84e5C6H99DPLwRXGu96JJmx7yH7ct55JhY7KEGQy2HfXC27Bnin8QDzrhVNjduhiAHM",
  "key23": "53UfzqTH4n2duCyiA8fD5VMhQHvSyU5rEJJhqTShDvXFtdm1x5qbF4sE2fBEq5AJB53e35tEdYpmXFTP7pAkDorM",
  "key24": "51oQ9b2PZq4ViWJQE2WagxRxdTjNar7xsy1bLHo5nAaH2augQJAMgf9s4772HbKN3XetBbSApzmCvEpmEgC7nKwU",
  "key25": "4HzxevJcaNC6crR47hX5N39c4xCx7ncNN8Vh1kR8f11yn9C3E78eJ2WJczEZ9D1EX1T59Es71P2fTQKYoVyjpsCp",
  "key26": "p2DyBAiGMbJu5MrUvTsRihaCV5oH5tNMfLYoTKGdkNWmH5PRQrxjAU3R2t1rA3tBXYjYHHoV1itNauwJnRFBgdX",
  "key27": "2DVoWU16ztZhzEQmUfRYSmsc271yktVc2935UmdrGQDzLd1Wd8zgP1NuDpSysHNiWhodHvpYGPAszm8dRBNmp7Kc",
  "key28": "5fS3Dsy1tyHDqU15Qh62YTGKNB9fpzLrHCCBVqGMDbe1qYuuUcsegABUecKsX1CCm2VtPXjQkgT6Yi3qzLuGphF2",
  "key29": "3K9HHUqVpPCh7yMKna9GNqey1MafCfyv6v5aDWk5tDeBXoqXhToeCacVAu2w5PigXfnLooFuef9xutetvXC41dbb",
  "key30": "41QkJ3HHEcDPdygsDr2fvdowqNSFqCddZUrvTDYNPH2kkZSWgAU4QNgQ6svH5JoRNYfVqdyetwkeW9kCdC442k3q",
  "key31": "78sRDpKKhsm9unBaqBNA4CPC9dPzEDZ294c68VfB4m3qeadtt4bqLFT9Re73Ne9vPgHgapi81NxU2JYhmbqXftR",
  "key32": "v3THCoRXyJ3AqbJabuWMZSWbvXPUNLzpaaBMrjXQCyUFVkM26MY61ZLZm8ByfMy93QmM4H5rWze2LrcxwPCN5NL",
  "key33": "4RCUDpZ2bXKFAnfYHnq1VCamEP1JkD81JPSTvFmTLYCB1CcDhs1N5Myrkfw1PqBCoG9dyKzBd8JFFKV6aoToRR1c",
  "key34": "NcttKpCA75HCyZtfYfGFLTpqdp5NWhNNvgXDyjFwtHVuxq7wLxM7FhNxgjCvZoKoUyMCyDHCAtorZ8P41HAy2iE",
  "key35": "SUJjGcuTsMA3KNbGjFW6h7qiiunygxfgq6L42D88CwUtKmmh1LWVLdjMoigHrKHreE5n9vSa4aYN1uTSQzzQy15",
  "key36": "2RUK9jKSVBueUDWPvQWWVDfLxw75T5amFMEcoEFFwq6eMyt2mfHcLcdWGo47aSJbpGfjSUq8oW5FyWNqztm4HWGb",
  "key37": "VrKkUEqy9bjcyfCE19LaNUxBS8av8SBKM9XZ5ffsCKxbh16QhLisrk42EYaXnQxvmndKPabDiEd6MFuuXFbnFoY",
  "key38": "4amvDzdVLjAhYbCqnuNnh6Kn1PLiQiL91EyQtxqAMMhYQ2kUybgtUNQnC1FWYtB7py5xvp7Nwzx6C68f1SUcaF6X"
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
