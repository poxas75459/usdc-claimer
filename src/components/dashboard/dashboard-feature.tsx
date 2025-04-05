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
    "3yarEq68HySEMdVttXXPvXuiEGGnKHmWLERSAmEbgAyUKHWKYuCdn52FgkSJGHvsN996CkUPBMrpCanJz6u2CMAR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AKAv665bLokNwovdDCJPkruuLzUZ19nSAfgzQ7VAYtR5T4ejQvLLeNUyVyeVxLWSmZmi8NfF25165CLAQsZRabV",
  "key1": "Dqfpdvad8okY7EYKuzWi2qW4KJHDo7i3NheWES4aD7Ym2ddiiZoJtvtjCkq59KcV656AHSbFggWgxB34AHVYSPC",
  "key2": "4SKoKKt9nc8DsYY95XYDYmB5WGWymeFTG6mGX8wpMKnSxMd52pf5ysSzhimv5CK7ix3p9jgeTRGLRkshgT431m12",
  "key3": "LPpG7Lc9BNHejP6b7YvdfXc26ZQkJpAfz9GqXFaLaim7UqXbrtWXxPf9veZpmXtvsiFUsmkh1iQh9nefc5JxaGo",
  "key4": "5FQUuaKtLecy1oqUkwmc5Un73vXAoTp2kJhZgUgzL9B8DGhXuP4V4gQWj7wbZueorrcqAbvWowHruuGwfv3Wy3aQ",
  "key5": "5roi8UR5zqeZXPy1eh6pzjv1sq3Bc68wFRV9ULz7p4KUM2VyhuEQp11gsmR9N8QTiuKzxUBwqPXc17EEpgTgNmiH",
  "key6": "4RpD1KUGq9LoQcLTcUfRPhCA7X7BCWbbX4wJkxdqyD4eBwHv4dy1k5VD6H6uxcTJXKu9zcpowZvwLVMhZkvUdNHs",
  "key7": "63DZnFRtTy2HcvBvN4bDeVGgvdYRFroWmmeYA8ik5XVyudQmhiF4vH2kdXJ9GzsbuZmGnkFrJbcbVFvgYCGzBMQK",
  "key8": "581vXrNRJPoQ9uZJ98cdfj4kTQjU5iK4Bizp9eeYMhikuQJbrm4RUeza7EZmZiMqLYXKksPV7tzx7q7kSu4NSo4b",
  "key9": "3aA3VxQFwh9NoR9P1fKbxxFyxyazk3e25FUJHYGmrUbsSAbsbpLwhW1WSCAYYbADgvvDYtUPJGsoXGnsEpf4t1aN",
  "key10": "3gmQD3NL3nDo8svvEkQBgsGp2vbas2QYuBu9FTUw4oPfxPP1MFPwxTpKYmtcHEDHKyDEyFmgRdHDrMJfYHSmeBi4",
  "key11": "2GorhvZCN7629rSG3PbwMd6899DTuz3niPpJiVakkRPUGFLfokBQFqD82smJhZm1RD9YmgHuzLAhKQZSdwAkaASN",
  "key12": "2cm5C6gDanr68VCBVvTtWsRb2EtoLehSwCzPqbZoR21VVQqoJn7KMeFZ97KFz8ZwQJTtAzfoEQj126Fk8XsG7ojN",
  "key13": "5wDPh7y9wNFCCiVrrWdiQ96TLqbuHPeGCDUnoPnA7bj75gK5JLNnLpCtsgqDofnLrezHoNvcWLEmESYjci1gZjVN",
  "key14": "2Hrc8LU6QPFL8zvgrmx3jkVgJ6L2JfXuv7XojpYgFUQmMV9LshCkuueMVXpvHCfBizXkSMR3D82qsv3uqaYw3oFk",
  "key15": "64uWgCFTeaUgQmfYrA9v4HvtiGQdzSVFYb9rUFV6wfpy4u2hdRg88oiwJ5hE59UpFj5vPUh2T6t9iQVh2mxGF2Wg",
  "key16": "42fRuV7AD4AAvJFG48oKjZcMLE5ptsGDwY2SYLM754Y4ddvFLSAPP6KJKdpK9yssZ4vvmgPos12Q24DNh7xcEmmN",
  "key17": "2jT72uiMwbgWbbRwzaaxvaWe3wy8QkRcnKrRvfvFHbE5rwbviRdExHqP4q7ADJDuXdL4TfytiquhNvuaFSgziZV6",
  "key18": "4CHpWYxPqM4NpDHyBJzTrEqJn5cZCFzdhBtohBd3zgG6kmGcqo78V5wGSKwVx2oViyDw8wrBZZ79zA18WJpjGD5N",
  "key19": "8JSiyhsQUtqAoAnJEPXBk8nJQmii4cgh8bH7ATD1MbntNgwrgjQShEUTzw9njDasTwX8NgxKgFQoNCJcpUz6YMp",
  "key20": "pjAtSGmW97gwJb7XczS1xQ1pQrynSdSZx8RuCkXM5pVSbx4aLEe1EKXNpZzBHG4evYT8zNFHBSw9yxbtXA6S6SY",
  "key21": "5tQmBWeKNKPjwp1hS1i6EEAQeULYYRJn8tJJHpBWKkkWV8PiHs4jN71DrsJMZy9EXDDxrVmWkPqPUUyVXa5SDJ1A",
  "key22": "4AZ7kjoY7sRaEfSENkq4SRQ6N6fq8JWBFS4Ldas25Xfqx7ghxDosXBebyq3LjuoaKkq7uqFCejf2LXRNaMsEs5Kn",
  "key23": "Hq3ieVe2fkNbi7SXjntjWs3AStVTisGVyiSoFPntBSsDPAeKTgKk48ty6bb7X81E1uMVJqwc66kokgffm4gcQc6",
  "key24": "61EhRukPQ1R7imok5ifyJMzXyqpDY2Uhy3gcm3161D8QzdCa5M7nnPQ8tDoeHUcdNhJB6zJL4dchwiQivKptyNuM",
  "key25": "4po9eRYU4hw16pRVxEQ8nnrEdYKETju4yojupABRNEhgpQzwU6UEdr5x7KYdCsc7WhD7XmTc2LPT71RGDVGgpfem"
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
