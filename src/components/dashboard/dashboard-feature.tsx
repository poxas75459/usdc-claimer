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
    "2oZQsnPg1YmxM3LaDhtJyRCGoakYUpZfZnAdsr74ZbnGUhcX4KRsqaNbcajpiwCNFCkkv64tzW1qLmxnL2AEMHwc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GeCgX4bc5Q9tHz7kMhPoQeiU8Pcp8xA2JGFC742Fr9fKa8BDnm13pgprPb7b7n4853tM6Aj4QcVFFw3BA2MsynZ",
  "key1": "3bCgcurV64ADZ2X8SGvD1AMCiEzLS2QQfyeTTwxszXwdfQ46JYuRYkDBpBEKXbQR5Kh2tYHYfs6JcYjo1DvmewEr",
  "key2": "46gayRBS6xfVeFiSS7cfYtDk3nC73ToYKdSK96XXASCtUEVecmFtAYqE8WsAqe41YL2oTvSA51GdKEby1pDzciUX",
  "key3": "3YR5sGRDmHF7MdpoMU7nUKQ1DnxpPWdFpHYsbtZkQZyKvsie9GdrJewCmEdYyWrnAmRkCksCVjqKj33xX4N7gVZT",
  "key4": "2nHhNBQYzQCmj8kEy62SUbq2yWPq8zzGLv348VHXC3ZU8z553xrKQDBZjswRTkytf7y2BRTrncXxAv6kMi9CUE3t",
  "key5": "5Zob9yNqdcD4Y7HpKxbhih4SSyZndMb9zWb68QvenHKX3KFXkZY9zq29WXrECJyYEd2wGEd3rnidyWxzQt8pv3p9",
  "key6": "549yiVT99rXP51pqaiPmxndrD2PoL6aAUAU3V38QYerE2PGW2XyFSUVrG1ECeP2fzzhvjR2nSMJjfen2Rr8osMf8",
  "key7": "551PUdKWDdnUU9bGD5sGug81avSVNS1Xhoe9KGWnuNgzfL3Nz5LSJLr2M9oEfeNvgFnxyJHEsLFYbANXQA4orG7a",
  "key8": "5XZv79u3iycb4zmumHPsfQyLuua8wWjSRR9FFuaZ25nSJJNZwwCLnqY5kVhrcm7hGQGir15BgcRfr17kUCPrdKmb",
  "key9": "2ERKrUUeYhxrXi1pn3Qks1nQs1tHfzoPQFBnhnoVFi5yLTdXceEX2jwuFJqLkdB5cypRJ3fYWGjaTaNJCcxMC5vm",
  "key10": "5DWwWrvaqWGQkg2yDoMxb7mUMpfA7cfP4U5iuHmmDfxiwiUxNvWavvuHif19iUpq8U5FLS4wuSpkBhHmjRkcWyWd",
  "key11": "47DsCgYGcCXrzBGaBs179eokKd46JoQ6ezmFhxcVaVSFhoXtYaQYupvARFantHm2Sc8eFXp4E1Jto6ZbXw5p3RGv",
  "key12": "3mP5mndbkWbTE3h9HmCLLDk5XXAugCRZ5srMP1asmJtCjF2TMjUNyhXa6EqM493h3dDdMVja6AGNTExzgGDLphX6",
  "key13": "R9zCLcmQxSArdjgerYyvcyYLXFVFH61AVaBNroF1JXg3DQz2ZUAqa3hjsEzopQ6ThYvcnm2CTnzvuMH1vh3L96S",
  "key14": "2txDeBy9Ayq9GyfbYLNmRNMTpwJWVSDLsy4VRfD4gnh4Y7GKucYeUozBf5wvNjf87bJnfiS2eUpTzDpt5JS2Duuh",
  "key15": "5CtwPsrUQ7bCY3RHi4yo2tn6gpm4oewuimY2CEHmUHHQGopnBqMCL4MubqDL7DabVLC8PqE7noU4A8FzpetNxpqV",
  "key16": "397w44938jkmGnihetmf2E5sxbQrf7ETpdDDpV5eU8PFEWgioGRG358snpeeJvzAEuvpCabjk2Fd1xu8Ctbvpdrz",
  "key17": "4JjYdFZXxz2X9oWAX1x6BVP2gMZs9oTxe1HqgosMFoKqRoKDAPFSuPx2iwfBNQWUQPPNNjha2XPW7e3f7C3ZgdCJ",
  "key18": "46MdwbNPyEh5WBfV3gfDexFKoKzTpmDCiodemb8pVARark8Nod1xcSZynNAoUHgy72nwyS9SXoiJdnwEbXwwU7Nq",
  "key19": "yRECGPktPXB1GnMcT1cXkz5ss2hqERWSA6kB1K1H21Hf3rRthjGnXC1z3GJV32XUmhu3tcdc5JZSuEkG4ndGza1",
  "key20": "61NdUpkTJF2HaR7k73TLJ619uepxJnx6rJx1jDjKQ5MxBB5BcTWs3XRUvTufQv5uUpDAtPT5xcjUsvQMDeztw4Tu",
  "key21": "45wV1syDYsnJSdbwXg2uu8oTDiaFLQaG3H4sXGx8uZZ7GuydkgojjFyVMTfB1aU7kbMp3ygKAiJLn2f4MqoEd2qb",
  "key22": "4UNjmBADRszgj3PzviZX5PnqM6J9pjoF2YnRQ9HepzhwmfPqewhEP93HrgQMwPAUofzY1XqC3bMhEwZFVNTyeUMz",
  "key23": "2i9H1pc26nLqPpmndC2HWEBoHSW3BhcbesVL4EZ9VU9RZSVCupV1f9amdSesSnrsXDxMDN6RfvzBTWSCDjMbfSx5",
  "key24": "1XotdRhFT4ytnF83u5kEEMGwSsgdKUKCzp5xbQptw4kbRMqcpWcCt2ELptgnZeZzfFP7tRSf2qqz2VpNeRnyUVR",
  "key25": "3Zi5AizYJfXFQjE1MeTkB6yh5diaZioq5zrqraXc2cRLTJL2EDKqUEx7Jq5gkVt6RBwGefKoBnjfWA3dpc1wcZmb",
  "key26": "5fZgTMjd6FRWAER2hosmQAfbF39KxUGSmfobKB6z3KYAZnu8Q96tdZmH6zQjEj54KqYQ733TDy88LmBwSqkkEAiL",
  "key27": "2hjbDAcd9U4Qiybbq442KfY4NXRCA5DXnTLswR3BPB2Ky777bs9Q5YNNF5jKvookHFnEsVG1xec1fts6oL9iJkUR",
  "key28": "eVVVXGzexoEzydt5gHLUUcmw3socQx1H5Sdx3nu6NyhgAe1brYbpMVMUxusMsByM3cweYWNNBzssEJLnqrxiGCr"
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
