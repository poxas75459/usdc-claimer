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
    "3DxQKCegPXuTXdmKssVYv3fwesDbEno4JdVdKAiWgBuvfQtWyUWLAnUDaQRW7WHLLNKaShyLjkjSqG3eaPtcRQnv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61RT8S5YNd7z9FBfN4KE1NQHak2DcGykVVCGkJBHiJCqDsBZHQxKf9JMuJNVJ41aSyTwDnhvSTWysVWsdngLnSKR",
  "key1": "JTtSBvioYFmjthbPiY92JW4kmxgsv4kasMZbLovNgRHrfqgMyfKmvMHagccMmeL4AXyGd9K3opriFGjyFCLTiCa",
  "key2": "44CgCTKquTbSyvLPr3swmEQ4QRofX5Jyf9cKLKz34db2jpTf5Fe27PujL7Dz82k6usq3AP2sbqS5qd8SNLykVLh",
  "key3": "2rf6Qh7y3RhLaEw6uNrNEJqfYeHsjABLCPEDn5i8LssrP1L7mHeybwhMqomPjTAkZU61DR6FHF4iSZS32P1BuaEc",
  "key4": "3pq6yH5SsD2ADKJXkikeMwqRUtEQxv7JbU8HEXkEzQgp5YgK69Xm1LqU5sqkTNoejyfMfeYafNstBgA9CZiTsZen",
  "key5": "pSC5fRAXtewQd5H3x13NBMXcjPsNLgJLX4brJfhthEhDfX6DfzRjVU4Rz1n23BmQiyi92M9iw7gW6ojpeTNsuE6",
  "key6": "3LcAU6PAdrStYioqxaX8jRysL9vAkxgkgGiDz7t5b75UNmBuBiByKSwLq1p4vK82UxbkuP6KfxAGwYoCEZysnHNv",
  "key7": "5YvPiimKhDxpibUhJsGkGUpgFPJTXejueSu13Kp99xdCABNwd6jjTYfV7A7jsabzo27MTsa2PqPx1NMicSqv7zKJ",
  "key8": "p78UNsaiGuz3kYCizhjKy3CNsHaP9QPNBvgvcyHx3rEfjKc4oc94CdmtGg3GKsxEq9qPezkx2iJkNF1ZNAPu7Tc",
  "key9": "2RVw7WBUwRuczscVUwL6jHq3sxqXAmEtMRLAXTPYfLfJEeFggiHdDE6RsC5zcG6YEEcTasV3Qy1enEfnFY5vAAmM",
  "key10": "2ConCVeGWbwQh59iEHE7Kp4pNdtrsj8cVA1bdSs8NEotFXUkih1hcSGTfnfC11B1kDhYcAnNkWp4WtFiMdGMcXac",
  "key11": "5VkrjgoiQqaMt5h569BDdHNSnNXXHW6bCDPawpWL4uyLx5VJpGbjvAabbDVVFntn25VS9tczws9skYAuX8Sstdyu",
  "key12": "24BRmKZdfAVoTkqF3RMigTo6HaCZU6bVDY5BmzQKrd5ZJGzUf9hRdLvcp5K8P2286Z9Jg29GC9dxXbLZkD4xcday",
  "key13": "5sWTpJ9vnKhvPsgjH74URTR4WunLcWmNAdz25q9DUh2qkRMduMEzr8bf1t2FRmAFr7GjSyevcSdvkz8HGSS9uBP7",
  "key14": "Hg1cqD3wrSEkmwtDxhyXjty1yZuAQZ3UvvSKGvQqpEqjCHZFC7PgEHfLTgvqDdazfng1srEFYD1HsS24ntd7fmM",
  "key15": "3abTaqmWUzHNPZAN15jRRscaEwsEQiChPjy1J4c66AE7arE2YCh5f11VyNHDBmcGiwmsNS9tXVL8RrLQPbC3qv1p",
  "key16": "5JWZCpzttgebRDH2s9xzvDwMA6fdyDxDh6skg3xoxr7YkGrKBtVYntJ9JjUXousNEyhsViUGsxf1jbyiGjXHjaNy",
  "key17": "SyVWe7pWacJGiNG8f4avUrBL9u33kXtkt9yiqYL2ib9xMyyJ6aby9Y9iUmwBQRSVLiWfF9L4SDFc1Rag5r5ajfr",
  "key18": "2c15dSEBcS35ND2ekTxZg2YgWm5gmNZgpSA5RG2ZFCMRRADaW487dUqgUyYVyWCGUk6oPgJm2jL2M2jyGWXGJV2B",
  "key19": "3ps7XL8M1r9D4qcENyXjLwAty58zRoggUxGxooS2YE5ZWWoWoiVTGotXmNbVwD3SATuMPekQ2PJ4FxMBgNb5mMLL",
  "key20": "tfzYjgcQo9SH9iUVRX9e3LuGqrcPprnsYJpD94sbajcc5vrECtVu5bPyhwUTEuoTUwMiDuSNsdPAde7yqsCin3Z",
  "key21": "xb8Z3Fu2Sw7Aj9LGSgmtyNCHBZs9x7bSqqddTkdFpp3tFjZhuobhKzx3iZicUk7NgiBqnnkoxXbvG8h9SxkMbr1",
  "key22": "YpBkRtU4jtnq8NHbGyvjar9dx82QxrMTBjuqN1M94ogzUPeB64JZfJwA7eZE3RYqXk4AsrCvmSuagethGg55B2K",
  "key23": "ZqRB5owfGDdSFo8onLMYTEgbeowHGoWPY34zhVzrpckibT2WrrpawBZiyifL9wvhc2GRYZodER6WUxDDb7fphBk",
  "key24": "3cnwiiLS97tnwvr6j5C27ndqAU83a6APonBvq3WktJVxhRpTWnK4FX3R7y8T897SyNgsyi4nGrVXbkRFV96DvJJh",
  "key25": "4Hce9iqHSY4P117qqagbMMe9nFCZCZYh4muDHijxhA8PE2pxi3HHDDxxRFLGtwQt7RyPX7YwfH9hvKkPjBqe1M3W",
  "key26": "5HrZfAZCex9k2BnakWuhQGpP1Jt93UDh9GP9X9ZpPME4yP6A5KeqCnibxzQLedzH4pMBdTzeEx62Rky12R3fFUov",
  "key27": "5DvXGiSeVmKLDjewAm8J2T91AcrSaWGdpDYQfpahprWTZj9zDHKRM8CPNgGTNk5sEkNEJBQYiHhPFyMAGZ1NssXE",
  "key28": "4yKSyM6ShSxgT9JMLA3s6D4QJsNetFxnpAB3YMgtoKyUqsRJnpG2ye8W95GMkdpUpcWa5xUj1dkN347VoJJ2iCJQ",
  "key29": "FgbRHWsfxR8fQi1wfasAVnoZ2HCHgXHFGmiAKqEwoRjfKrxuV2UyfEuzFrrGFkVyMp3YHCyvUsPgN3X6mYfgsdK",
  "key30": "5LvEZ2tY8AALcpucrnGQ3cHYeQqJacLB6GcoHvXdk5yt9XofPzmAa4mD6jJ9WhszvPBxcBtitjZtLzhraMf6RNQh",
  "key31": "28jqy29RuXy61VYZm1nf7NN3X7oD7jMydX9WWDAod6vgkw2bY9aGq95D4sWNoHVnW1HcFLo9CTzofFyrbvErqDAu",
  "key32": "3S4GtWy9Q6AGjQhnLCBMhyses7poUZkCiyQ1W14NJn2EepLs9VFx6rm1gSQGzTNEkyTm3tGi9xmLUsMrtAXXMdHS",
  "key33": "2WmaKahvvxkJJ8XztXvpB6QPNr8RcmBmzbLytAKGgJEFAnsnbDqfcmRUDy4HQfP7EkLc1EP2Cumr4TunAKr3iacd",
  "key34": "qBHj2kE5ogAEptbHKf7VhhujeFKThYyNmon2qrL3t5PGW7izzHiH2zUJ9cv9YgGqfrzzBnCxcchetGJJ7XmMZRD",
  "key35": "2LHo3ih1PXvmbNYHff48J8Czt5SHjUeeAA7jnDVeWk1DPmWwTjsSPEnstByesqX9eXD38p4jsCFDBwqFwjkJKGEs",
  "key36": "5VAmjRsheb7RoPtNsxXYFvSR9KhWMQ6YNMRtyy9ibd8kfgKhsYw5kdV1AbxKDZsVP43iutVJqPtk8rwXmJKfXgbg",
  "key37": "5weEEtS6PWVTWD3xqkcfwx9Tqcgbat8oyg39YvrzWQxvNcKPoHgRDZoekkzmPbTSMCB5rwzTboCGV24vAXX451LN",
  "key38": "5C8BtufS6gea9MqjEy3YTU65aHVVkPBfaxhVKpvftwn3bKdvojMg9nFrBgGU3u6cLwHA9zPyBa55HbtzqPhVMrwn",
  "key39": "34MGwSSqJxaM6YgoBBvRXzZ16qp9UyiSWkdSGZcx5msfX615FiSkQ5XDZZHnuNNmb4TukPaXMykEk97pKmMoSggv",
  "key40": "61i1hduzWcwaMZ55ArEh6HiSdm1DZukYjBRQYuszVngQARqqSxGY8Wek55RKJb7EB8f9DAAdWefJh6jJ8a7NWBQZ",
  "key41": "4t15cxxTwLAAUwP3SfAE7rXw9jioKHsLzdmkxiAgjrrjgXmgVfRv8pG5iZ3dFoiNZYXX2vcmkrZYjhojmvjQ2HjE",
  "key42": "42q2CmAZa8A37j8D2WhCzSuKVmF9HbR3xWvjt4mweTerfMMhrh4zUh9rRHgEZByFfATNa8yitkM1ZCXsqx7u4Pe7",
  "key43": "4HXZjPU2zppwBnVgtAB2MLraue8g2bbr6YuntGu6oC4rBdSDwgMBcaeavJsexK9RUqPjvsEFasJPxQXcZa1Y5vmg",
  "key44": "5R4izkzKDx3tvP9bk3pX6g1x5dgLHLu2vyX5UdTeAg8bdrS3fzEV7r1cLrNAPJYM6oJL1fpJXPu8sNNeuZmDQ45P",
  "key45": "teHmVpE3ndHpKRx6CPS5vz7T2iS27pkgp2CjKw5VF9TJ1EeUAprVrvsT4wyH63vDGRvSz7qa22m8Kpe9j5bU2Vr",
  "key46": "2q9eycjJq3WoCB73pU47xN96g7zoucxkzLTb77mgQNVezannzkEEWNXLQ7vg6BTVFJqKGLAvwrbtPrekUwgRTcLJ",
  "key47": "5inCYaxHCteZQ8EzpfvEmSxCqVeabARiexdtpXJjLnG1k7NttK93xGSjLxc9VdP1XDpBFcFyM4cnHjEAbWCvjDNb",
  "key48": "2rmYP5UHpMuiSfyosE8WQ34hGKBaPbFVwAwUJCW1epSCsF2YHHA5yYJqEFYisgzXztiGT7C6QEoHB1s2g2fCC9XD",
  "key49": "5osAHjvMcFUkRNKP3GiDySVU2u3cu7KPmNKNBvRLqUEM6A9fWtncUkJ3R7tySrTnHTYENpw2zsCnBLYiM8iK1FPL"
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
