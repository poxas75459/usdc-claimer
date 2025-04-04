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
    "9iE1f7vdgXeHFpfBBhaP9mSxdY2EwHRuZKhZSqPGHtw1EbsVeGyBGMCyihbKcaiySRSYk7Fo83AoMXJPdApNnhR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3k8JTdVyhDQJhfyoCAWJh4SLdEL6sSzpSkcFsRj7Qm7zJN69SVrwBu1yGtHv49AViXKXnjRShXqB6FRcyLBTEyph",
  "key1": "3THxEJ9vGVcsngmrpkpUeMWXZ9USUALAs2Hob6Wskwap5rdkPGgSxWznWytiMjJr5YYbvzLPK6gNtfFP5u1K5Y8M",
  "key2": "354P5kSXUwNpPAeqkXw6xDQmsrzv4PewFaneQfhparLQQFay1M3UWxaRXwtBnnDcWj9MKhQzwfaa9hVVKEPNNto1",
  "key3": "BZPQU5YW4s9AKeFJpJQrRNeKJ7GoxA9mpJZfcVDiwGujkokgWhWuQ2D4wJ4BieZc7abpsqBx8nQ7xPHqvieT7UQ",
  "key4": "3qkDsbsMRKj7amB9f9PekUsKVSpB5FuygNDfQ6DiVrGHNj4SDyu2QjmMT1j1VE7W9ECFKcPTvA6eWJywynsbcjNW",
  "key5": "3z7Tu5rTU3E1myteqaN2UzFDncQnbDqPuAF3QuoEA9Wohbgbz4E4fhQ8dV7tBquF2jQk83z4hsWZuvbgC1Am9jDb",
  "key6": "5UppAbQdUqZ9iNLUNGg4htiLfb9f2Ai5XkPBMDeUsFybMKPgro3ShqzLJrWkjdBBvKNxQdSNeRqSHFR3mqNvuTkg",
  "key7": "5sxQoAxXpNgCYbr7TbYz9VyurK9rmPQPxWDkmTyyngignNpN1SEDRLjNJX3gMfpqP4AbsiYSpckHurgbTTZ2Zaen",
  "key8": "2xXb5AfVVHR3eWuxqczgMZqNQVJGvBrWQaTZSCoe73CoVrdunrkjaN3pmwkgEA6Ei68jz6PtEZKhkA8rPb6JNb5",
  "key9": "67PzcWpYzKRw5VkCyY1rBumiZQTtmVmUHUtB5fYHB6dEuPi4xTPV2rPgg2jGmLTD1mLb25hSsP3qWhSDpKsMMjd",
  "key10": "3jn9VU2VGiPLuovw3Dc3SjxV3yHJp8rz53e8ix3djsZe2jDvtmx8UmYQSovJnqNQR3ywkvy9uVRAKN22DXcPfsXh",
  "key11": "WL32g1ScBg3pyvB5rsB9UNsBtu5turfSzdMXhMJGP6nh1b2BSCHcgxreLr6T13tyuHprWxPjKrEUGEwoshDqv5g",
  "key12": "611hxQV9ghq4tbv2os5izcNq4bReSQXaW3vNwyeCVkLWc3npVM9p7YdMczVkuRshjF14QLUYNUiSqCU2SvuP5dzw",
  "key13": "3ajHfkVxad4oQy6CcEA2bjCSgKJ8oEgpeTJ21pzJWq1UAyqm8kwGvn7P5QaDC593RuWtUbmvbMJovCupny8Qmc3t",
  "key14": "4gpL8chugLXB5NAc4ebQMkXQnTi82jBkeN7F8iRQw5wozic6VadcjyaG1AYcSUoGipCM9EPQb2YAp2msCXSetVFj",
  "key15": "5gupA4e1m4idMuR1j9EMoiRecEkoun1bv6Cut1mf6UNLZZazyQgVekHVzmfy5UmuMXorrbr4gqB8AVF12cbNroUA",
  "key16": "3o4u575BxM2A5Zg8gvGLobhH49Hisgw73GhJVBziqK51FaoHJMm8GqAXcR55Gk8deqgkmjt1zck2fDH5mmkcNLAr",
  "key17": "5rThUcuPtusGrLDdSh1pkrUk8iipgxZW9kZs2qyjfZv9UUGxQA32z6W8zateG9pmcgMnXjoC7ATsZpNrWZmxLPzb",
  "key18": "VyWQt8VjoUFor4MQQ8JKSP8gzVFz84Tr8ahepdZtUNazbqXUjX1xpGwPDyLkKELdu77NuyyMLnFEdYEY7QGKZjX",
  "key19": "57BYnJ5DtsBuQk8J36msBAQ8VN7GzKVeiptJnyy9Gi94iBcrpnYmdhL1GRYVPeZUn7faXKvhezvM4SBZWmFaE5GZ",
  "key20": "3NaaiYduct6XRxHGZLLCK42M1592Xg2Hstqbgi8S4MreDy9LCpBWAw9uwpCTaTyupSAdiRUVhSzge752CDWkjmBf",
  "key21": "2vALi4RUd7CRtutWAwPQoSJDEMUZGz9nuSUJ7SFq5WupZPctWyvdESPg3wtCKrGSmGJivz42nwGtAj7YJu1izKz2",
  "key22": "5BBG2ZXg7qW1AFL1JsmUchWJU836KXBzMWR4sY9fHKnEiPEgCPF84FwqxyX2nPEN1Wv9PL2PnwnvfY9cPqUxvUgB",
  "key23": "27PJ93LN2vEKQtC6ng8zUyxpA7MLenJYrtSGGwcziu2yrmtSttL7Jb1BmoTHdcC2b2aHbbvhXq83wTsuP9RWy7uY",
  "key24": "5sEe6XFEkSZnfw7Ppkb3yvqhtNzfxseXsX5c5vX1Ha5HpyXJU2RDVjuYfUutirDMTDKPYx7AszgGc84nKpPg3aGi",
  "key25": "5og14JwHMbosBtivBWRdHaaVwV84RHPierHboEDawamw84upZXTJYDfoKDBsHCa9mznQzWf5yuL42T9m7PNTCohr",
  "key26": "2rXEGuJXUB6Ld9jb1xCtji4acEbr4t8M42MK5jctnYTgbgHruB7exbhd74EgoFk7BqTb4FYKcQ1dZMrjxyAwSEMN",
  "key27": "5qLiQzVnXSf6YWjEXcporp7vbeTFxgTuRdz7jozvNDXFJijSs7o3WzH3ZVdGiTVrJd4VAMZfG5gGfVMtyhwZj9fo",
  "key28": "2dUjCpqcuqhvHPRim8EjakphvLoEQNf9J2t1drxzaTun2517YEXLiTWv9T4iovb1QpatzgyGZu1VnEkGvfYBhVWQ",
  "key29": "3uF62ZsenuT7Aet97c8vMGt2nu9a6y4zTkmGjhGJen8gET9ncKFFVCEWNXNRijMUhLjpnH9XWdQSDH5VSZtbw2w9",
  "key30": "qGn7Pp1jtAazjN6HZMBsL4D6X8g1wZyyBtXigEfjNfC92ETiSxG5G7qiRGX1RMyez916E6hdTgf1Q8uJGGD8WKC",
  "key31": "3ShpcnVSeq5dnKUZCmAN4KjVRFRtpZ9bKnArxcecpUJ9Jp3qhXXzYtXUynXpfYrzehKYoJQ2Xizo4ac7TvZ8TC8u",
  "key32": "32zrDLSPgTR7eXbfiojFBWYHqcC3bR9ReFeyMe2CkMbY1qPSeyPhqGeTpA27zJcX1BnZQStYKz3e113zCEUdy4ea",
  "key33": "xZDpfZ21wD3kbbFFhq7sL6oX9A2FbpKgpr629zFJwgeYTun5hmiA6xJo1hgFMYLt71zv43totb1ZiQ8HcNtnNx8",
  "key34": "4H1wT9WwV4syrr862wQ5YLJZVCXBs6kZ9dpjV4CE4vgdzGdooUpyD68ZXAP7fnu4PWzUFDgUTcF9i6MroS4qr5Ye",
  "key35": "5UYUa4SbYTkamUcDWxNFWZFBSoLk3VhooQWo1hMGNYKWigCrfXBWxgwHn3wgRnCmPWWZ8sLJyuHQVKXtsJih1Fto",
  "key36": "iGSHCy3dL2ezhPF1pXFysoCCGkwzurRSTsexevLHxqDTz1Ke7k5nDUTdFQoYkEVDJpEhL6dzGwgcMp4icThiTJG",
  "key37": "4hVsHtibBXt7TjZsJoZ6AGMFCMLX8rX3fd6uQq1W1X9Psx29YPfubfiqxPTr6b3HDJckR2YnmnScJoqmrmmoDnaB",
  "key38": "3FaFAzE1b6b6fJ3ypFSE6UMQ2vFMk1ashaLJihorGexF84vq54YgB2GdqWev6kUqtXyTnVSsVWBZS5qWuPw68Mbe",
  "key39": "4WCbM9Nh6RQ6XspwkCQDDgXAkfLJGVWt3wRGCTWEZ82kr8wTMVCQ6riefUQw73epRM5YTDyJSRRG4g6PKHotpMH1",
  "key40": "4ECwdRLEb1iaJpPGJXmhndJWzDUJiuhQNreWvPYAEjgNBzNbmzNTVpCbdXCQDRqSPuMXji2fxYAQTk3HAQzwq2wf",
  "key41": "LPVSRC5VNkzaxRkj2gUCyghP6HLUz83HJnPzJPp21Wa7xFRvaLEKejHVYhkERjDFrXSo7FcbxW6WWbcijZGvD18",
  "key42": "2VPa4bWkMJfxSYJZqpTim7cvQB37npjzbDSAad3hKtWZP1RjUaCtjrWinmkp4vjMxYiaDk5tzxLyAimDj9pHnqqo",
  "key43": "4GaMPoi82pj8jHgC3YYyWcVVHD8s6vVwuTLjPeGkABCmMaLS5LR8PahGiNJ4jL9v537HuFcfjSusyhehXkDn3Pzq",
  "key44": "nwmWdizUQzW8m8w1iLiJxtkYeFmXCJeTfKQYLWLUmbZdBhRtZSh1WKMyzZcahtvFPYrXdNqqMjX1M9ireP5TZ6Y",
  "key45": "3deoF85653p9snqnumvzDF3sEFF5AA9YHLLjSvPiKmSzU4QKZVdHFUvpLxZEwTWp5gmwkqyxUQtdwvKQW8zs36Wp",
  "key46": "S3cLpmr7uUAFymjTCvXsNXyLoM6DwKbeqStWuCwf9YHW1LoxFt7r6X7AMSMB6y2DjewCUYTRt5RWxMGtu6TAV1C",
  "key47": "5GmcT4qFRvLHnrLL55uVzeuvpXWHL8J8cEESyCQxvGuhjq6L3hF89ohVDa32Wxg9VADMN6S4BZLtUHkbJ4TqZb2A",
  "key48": "4PkUQGZo72aufGDZtRpoaG9wtens2cFqToZY9NyocjBNo2YDDmLaWHHkiMWb2GBDzWFLMqVhkAm569veNKBCw7Ru"
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
